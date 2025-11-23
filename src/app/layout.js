import { Rubik } from "next/font/google";
import "../styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Portfolio Anti",
  icons: {
    icon: '/logo-anti.svg',
    shortcut: '/logo-anti.svg',
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
