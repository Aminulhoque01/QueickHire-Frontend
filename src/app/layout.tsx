import Navbar from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "@/redux/provider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AuthProvider>
        <Navbar />
        {children}
        <Footer/>
        </AuthProvider>
        </ReduxProvider> 
      </body>
    </html>
  );
}