import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ShellProvider } from "../utils/shellProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShellProvider>
      <Component {...pageProps} />
    </ShellProvider>
  );
}

export default MyApp;
