
import { Inter } from "next/font/google";
import style from "./globalStyle.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artur Brenner Schmitt | Portfólio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
