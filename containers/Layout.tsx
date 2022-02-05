import Head from "next/head";
import React, { ReactChild, ReactChildren, useContext, useEffect, useState } from "react";
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import { Store } from "../utils/store";

export interface AppProps {
    children: ReactChild | ReactChildren;
    title: string;
}

const Layout = ({ children, title }: AppProps) => {
    const { state } = useContext(Store);
    const { darkMode } = state;
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        let newTheme = darkMode ? "dark" : "light";
        setTheme(newTheme);
    }, [state]);

    return (
        <>
            <div className='app' data-theme={theme}>
                <Head>
                    <title>{"Mally"}</title>
                </Head>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
