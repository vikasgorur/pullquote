import { Machine, assign, send } from "xstate";
import { searchQuote } from "./lookup";

interface QuoteUISchema {
    states: {
        editing: {};
        searching: {};
        info_edited: {};
    };
}

type EditQuoteEvent = { type: "edit_quote"; quote: string };

type QuoteUIEvent =
    | EditQuoteEvent
    | { type: "edit_info"; author: string; title: string; year: string }
    | { type: "finish_quote" };

interface QuoteUIContext {
    quote: string;
    author: string;
    title: string;
    year: string;
}

/**
 * We try to do the Google Books search two times before the user is done editing:
 *  - when the user has typed 24 chars
 *  - when the user has typed 36 chars
 */
const shouldEarlySearch = (context, event) =>
    context.quote.length === 24 || context.quote.length === 36;

/**
 * This statemachine implements the following behavior:
 *  - At regular intervals when the quote is being typed, try to lookup and auto-fill the author & title.
 *  - If the user manually edits the author & title at any point, don't try to auto-fill after that.
 */
export const quoteUIMachine = Machine<
    QuoteUIContext,
    QuoteUISchema,
    QuoteUIEvent
>(
    {
        id: "pullquote",
        context: {
            quote: "",
            author: "Joan Didion",
            title: "Slouching towards Bethlehem",
            year: "1961",
        },
        initial: "editing",
        states: {
            editing: {
                on: {
                    edit_quote: [
                        {
                            target: "searching",
                            cond: shouldEarlySearch,
                            actions: ["setQuote"],
                        },
                        { target: "editing", actions: ["setQuote"] },
                    ],
                    finish_quote: { target: "searching" },
                    edit_info: "info_edited",
                },
            },
            searching: {
                invoke: {
                    id: "lookupInfo",
                    src: (context, event: EditQuoteEvent) => {
                        return searchQuote(context.quote);
                    },
                    onDone: {
                        target: "editing",
                        actions: assign((context, event) => {
                            if (event.data) {
                                return {
                                    quote: context.quote,
                                    author: event.data.author,
                                    title: event.data.title,
                                    year: event.data.year,
                                };
                            } else {
                                return context;
                            }
                        }),
                    },
                    onError: {
                        target: "editing",
                    },
                },
            },
            info_edited: {
                on: {
                    edit_quote: "info_edited",
                    edit_info: "info_edited",
                },
            },
        },
    },
    {
        actions: {
            setQuote: assign({
                quote: (context, event: QuoteUIEvent) =>
                    (event as EditQuoteEvent).quote,
            }),
        },
    }
);
