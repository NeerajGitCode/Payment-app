import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/authProvider"; // Ensure the provider is capitalized

export const metadata = {
  title: "Pay App By Neeraj",
  description: "Created by Neeraj Vishwakarma in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <AuthProvider>
          <Navbar />
          <main className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
