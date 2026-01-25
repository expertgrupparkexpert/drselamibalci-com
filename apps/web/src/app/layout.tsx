import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Dr. Selami Balcı",
  description: "Dr. Selami Balcı - Kişisel Web Sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col bg-zinc-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900`}>

        <Navbar />

        <main className="flex-grow pt-20">
          {children}
        </main>

        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-serif font-bold">Dr. Selami Balcı</h3>
                <p className="text-slate-400 max-w-sm font-light">
                  Sürdürülebilir şehircilik, kentsel dönüşüm ve modern yönetim vizyonu ile geleceği inşa ediyoruz.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-slate-200">Hızlı Bağlantılar</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="/hakkinda" className="hover:text-white transition">Hakkında</a></li>
                  <li><a href="/uzmanlik-alanlari" className="hover:text-white transition">Uzmanlık Alanları</a></li>
                  <li><a href="/yurtdisi-faaliyetler" className="hover:text-white transition">Uluslararası</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-slate-200">İletişim</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>drselamibalci@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Dr. Selami Balcı</p>
              <p>Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
