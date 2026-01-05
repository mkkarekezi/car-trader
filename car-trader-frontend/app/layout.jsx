import "./globals.css";
import localFont from "next/font/local";

const GeneralSans = localFont({
  src: [
    {
      path: "../public/fonts/GeneralSans/GeneralSans-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-VariableItalic.woff2",
      weight: "200 700",
      style: "italic",
    },
  ],
  variable: "--font-generalsans",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className={`${switzer.variable}${GeneralSans.variable}`}>
    <html lang="en" className={`${GeneralSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
