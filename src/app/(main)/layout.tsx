'use client';

import { ReactNode } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/chatbot";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </>
  );
} 