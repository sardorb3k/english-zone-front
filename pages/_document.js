import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import $ from "jquery";
import Header from "../components/Header/header";
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        <div className="body-overlay"></div>
        <main>
          <Main />
        </main>
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
        <script src="static/js/vendor/jquery-3.5.1.min.js"></script>
        <script src="static/js/swiper-bundle.js"></script>
        
      </body>
    </Html>
  );
}
