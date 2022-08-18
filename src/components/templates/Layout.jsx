import Head from "next/head";
import styled from "styled-components";
import { Footer } from "../tools/Footer";
import { Header } from "../tools/Header";
import { Navbar } from "../tools/Navbar";

export const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
