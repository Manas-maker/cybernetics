import '../global.css'
import { AnimatePresence } from 'framer-motion'
 
export default function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode='wait'>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
    )
}