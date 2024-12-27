import '../styles/globals.css'
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp 