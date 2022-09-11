import Head from 'next/head';
import Footer from '../components/Footer';
import MoodEmoji from '../components/MoodEmoji';
import Navbar from '../components/Navbar';
import QuotesProvider from './context/quotesProvider';
import Content from './content';
import { useSession } from 'next-auth/react';
import AccessDenied from '../components/AccessDenied';

export default function home() {
  const session = useSession();
  console.log(session, 'session')
  if (session?.status === 'unauthenticated') {
    return (
        <AccessDenied />
    )
  }
  return (
    <>
      <Head>
        <title>Taltol</title>
        <meta
          name="description"
          content="We love quotes and we want to provide the best
user experience for quotes."
        />
        <meta name="keywords" content="quotes, planner, motivation" />
        <meta name="author" content="Abdul Hameid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <main className="home-main">
        <MoodEmoji />
        <QuotesProvider>
          <Content />
        </QuotesProvider>
      </main>

      <Footer />
    </>
  )
}