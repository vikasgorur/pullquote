import { Machine, assign } from 'xstate';

interface QuoteUISchema {
    states: {
        empty: {};
        quote_filled: {};
        info_empty: {};
        info_filled: {};
        info_edited: {}
    }
}

type EditQuoteEvent = { type: "edit_quote", quote: string }

type QuoteUIEvent = EditQuoteEvent
    | { type: "edit_info", author: string, title: string, year: string }
    | { type: "lookup" }

interface QuoteUIContext {
    quote: string,
    author: string,
    title: string,
    year: string
}

/**
 * This statemachine implements the following behavior:
 *  - At regular intervals when the quote is being typed, try to lookup and auto-fill the author & title.
 *  - If the user manually edits the author & title at any point, don't try to auto-fill after that.
 */
export const quoteUIMachine = Machine<QuoteUIContext, QuoteUISchema, QuoteUIEvent>(
    {
        id: 'pullquote',
        context: {
            quote: "",
            author: "",
            title: "",
            year: ""
        },
        initial: 'empty',
        states: {
            empty: {
                on: {
                    edit_quote: { target: 'quote_filled', actions: ['setQuote']},
                    edit_info: 'info_edited'
                }
            },
            quote_filled: {
                on: {
                    edit_quote: { target: 'quote_filled', actions: ['setQuote']},
                    edit_info: 'info_edited',
                    lookup: ['info_filled', 'info_empty']
                }
            },
            info_empty: {
                on: {
                    edit_quote: 'quote_filled',
                    edit_info: 'info_edited',
                }
            },
            info_filled: {
                on: {
                    edit_quote: 'quote_filled',
                    edit_info: 'info_edited'
                }
            },
            info_edited: {
                on: {
                    edit_quote: 'info_edited',
                    edit_info: 'info_edited'
                }
            }
        },
    },
    {
        actions: {
            setQuote: (context, event: EditQuoteEvent) => {
                assign({
                    quote: event.quote
                });
            }
        }
    }
);

