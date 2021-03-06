import "../styles/globals.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import { StoreProvider } from "../utils/store";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    );
}

export default MyApp;
