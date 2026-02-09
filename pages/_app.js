import { GA4Initializer } from "@/components/gtag";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <GA4Initializer/>
      <Component {...pageProps} />
    </>
  );
}
