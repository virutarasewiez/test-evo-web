'use client';

import { ReactNode } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/chatbot";
import Script from "next/script";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {/* Microsoft Clarity */}
      <Script id="clarity-script-main" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "r439g12v77");
        `}
      </Script>

      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SLJ2WW1CNG" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SLJ2WW1CNG');
        `}
      </Script>
      
      <Header />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </>
  );
} 