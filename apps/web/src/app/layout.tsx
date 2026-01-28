import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://drselamibalci.com'),
  title: {
    default: "Dr. Selami Balcı | Şehir Plancısı, Akademisyen ve Expert Grup Kurucusu",
    template: "%s | Dr. Selami Balcı",
  },
  description: "Dr. Selami Balcı'nın kişisel web sitesi. Sürdürülebilir şehircilik, kentsel dönüşüm, gayrimenkul değerleme ve akademik çalışmalar hakkında bilgiler.",
  keywords: [
    "Selami Balcı", "Dr. Selami Balcı", "Expert Grup", "Şehir Plancısı",
    "Kentsel Dönüşüm", "Akademisyen", "Expert İmar", "Gayrimenkul Değerleme",
    "Sürdürülebilir Şehircilik", "Proje Yönetimi"
  ],
  authors: [{ name: "Dr. Selami Balcı" }],
  creator: "Dr. Selami Balcı",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://drselamibalci.com",
    title: "Dr. Selami Balcı | Şehir Plancısı ve Akademisyen",
    description: "Sürdürülebilir kentsel çözümler, büyük ölçekli proje yönetimi ve stratejik danışmanlık.",
    siteName: "Dr. Selami Balcı",
    images: [
      {
        url: "/dr-selami-balci.jpg",
        width: 800,
        height: 600,
        alt: "Dr. Selami Balcı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Selami Balcı",
    description: "Şehir Plancısı, Akademisyen ve Expert Grup Kurucusu.",
    images: ["/dr-selami-balci.jpg"],
  },
  icons: {
    icon: "/icon.png?v=2",
    apple: "/apple-icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Selami Balcı",
    "jobTitle": "Kurucu & Şehir Plancısı",
    "worksFor": {
      "@type": "Organization",
      "name": "Expert Grup"
    },
    "url": "https://drselamibalci.com",
    "image": "https://drselamibalci.com/icon.png",
    "description": "Dr. Selami Balcı, sürdürülebilir şehircilik ve kentsel dönüşüm alanında uzmanlaşmış bir şehir plancısı ve akademisyendir.",
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "İstanbul Teknik Üniversitesi"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/drselamibalci",
      "https://expertimar.com"
    ]
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col bg-zinc-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
