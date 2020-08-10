import Head from 'next/head'
import styles from '../styles/Home.module.css'

import QuoteContainer from '../components/QuoteContainer';

export default function PullQuotes() {
  return (
    <div>
      <h1>PullQuotes</h1>
      <QuoteContainer />
    </div>
  );
}
