import Navbar from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
 
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Providers from "./providers";
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
         <Providers> 
          <AuthProvider>
        <Navbar />
        {children}
        <Footer/>
        </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}