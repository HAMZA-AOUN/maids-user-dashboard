import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import ClientTransitionWrapper from "@/components/ClientTransitionWrapper";
import LoadingBar from "@/components/LoadingBar";

export const metadata: Metadata = {
  title: "Hamza Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Providers>
          <Header />
          <LoadingBar />
          <ClientTransitionWrapper> {children}</ClientTransitionWrapper>
        </Providers>
      </body>
    </html>
  );
}
