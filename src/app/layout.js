import { Inter } from "next/font/google";
import "./globals.css";
import { LoginProvider } from "@/context/loginContext";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Context App",
  description: "Exemplo de uso de contexto em NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginProvider>
          <Menu />
          {children}
        </LoginProvider>
      </body>
    </html>
  );
}
