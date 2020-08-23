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
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176070074-1"></script>
      <script dangerouslySetInnerHTML={{
        __html:
          `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-176070074-1');`
      }} />
    </Head>
    <QuoteContainer />;
  </div>
}
