import React from "react";

import QuoteCard from "./QuoteCard";
import ActionBar from "./ActionBar";

import styles from "./QuoteContainer.module.css";
import HelpText from "./HelpText";
import Footer from "./Footer";

export default function QuoteContainer(props) {
    return (
        <div className="container mx-auto px-40">
            <div className={styles.app_title}>Pull Quote</div>
            <div className="">
                <HelpText />
                <div className="">
                    <QuoteCard />
                </div>
                <Footer />
            </div>
        </div>
    );
}
