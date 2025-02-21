import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Mohsen Hami",
  description: "MS Student in AI at AUT",
  icons: {
    icon: "/pizza.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
