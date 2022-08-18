import Head from "next/head";
import { Footer } from "../tools/Footer";
import { Header } from "../tools/Header";
import { WorksNavbar } from "../tools/WorksNavbar";

export const WorksLayout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      <Header />
      <WorksNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
