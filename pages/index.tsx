import Head from "next/head";
import QuoteContainer from "../components/QuoteContainer";

export default function PullQuotes() {
  return <div>
    <Head>
      <title>Pull Quote</title>
      <link
        href="https://fonts.googleapis.com/css?family=EB+Garamond:400"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,400i"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
    </Head>
    <QuoteContainer />;
  </div>
}
