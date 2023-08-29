import "../styles/globals.css";
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/shared/theme-provider";
import SearchBar from "@/components/search/bar";
import Headline from "@/components/layout/headline";

export const metadata: Metadata = {
  title: "SearchBucha",
  description: "Search and find different types of kombucha and flavors",
  viewport: "width=device-width, initial-scale=1",
  creator: "James Jo",
  authors: [{ name: "James Jo", url: "https://github.com/jamesikjo" }],
  icons: "/logo.png",
  twitter: {
    card: "summary_large_image",
    title: "SearchBucha",
    description: "Search and find different types of kombucha and flavors",
    creator: "James Jo",
  },
  themeColor: "#121212",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="container h-full py-10 md:py-16">
            <div className="m-auto w-full lg:max-w-[75%]">
              <Headline />
              <SearchBar />
            </div>
            <hr className="mb-6 mt-10 h-[2px] border-t-0 bg-neutral-100" />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
