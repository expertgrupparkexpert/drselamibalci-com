
import { Post, Video, Activity, PageContent, ResumeItem } from '@repo/shared';

// Helper for dates
const NOW = new Date().toISOString();

export const RESUME_ITEMS: ResumeItem[] = [
    // Experience
    {
        id: 1,
        type: 'experience',
        title: 'Genel Koordinatör',
        organization: 'EXPERTGRUP',
        start_date: '2018',
        end_date: 'Günümüz',
        description: 'Şehir içi otopark çözümleri, gayrimenkul geliştirme ve danışmanlık hizmetleri.',
        sort_order: 1,
        created_at: NOW
    },
    {
        id: 2,
        type: 'experience',
        title: 'ARGE Müdürü / Teknik İşler Müdürü / Etüd Planlama Müdürü',
        organization: 'İSPARK A.Ş.',
        start_date: 'Geçmiş',
        end_date: '',
        description: 'İSPARK A.Ş. BÜNYESİNDE YAPILAN BAŞLICA PROJELER:\n• İstanbul Geneli 100.000 kapasiteli Otopark Yatırım Süreci\n• Tarabya İstinye Tekne Park İnşaatı\n• Alibeyköy Otogar İnşaatı\n• İstanbul Geneli Hizmet Noktaları Kapsamlı Bakım Onarım Projesi\n• İstanbul Otopark Master Planı\n• İstanbul Geneli Bisiklet Master Planı\n• İstanbul Geneli Heliport Master Planı\n• Stratejik Plan (Son iki Periyot)\n• Otopark Mevzuat Çalıştayı\n• Araç Park Alanları Yönetimi Uluslararası Sempozyumu\n• İstanbul Geneli Yol üstü Otoparkları Reel Ciro Tespit Çalışması',
        sort_order: 2,
        created_at: NOW
    },
    {
        id: 3,
        type: 'experience',
        title: 'Denetim Koordinatörü / Eğitim & İş Geliştirme Müdürü',
        organization: 'UGETAM A.Ş.',
        start_date: 'Geçmiş',
        end_date: '',
        description: 'UGETAM A.Ş.\'DE YAPILAN BAŞLICA PROJELER:\n• İŞKUR & GAZBİR & UGETAM işbirliğinde İstihdam odaklı eğitim ve personel belgelendirme hizmeti\n• Coğrafi Bilgi Sistemleri Operatörü Meslek Standartlarının Oluşturularak Resmi Gazetede Yayınlanması\n• Topoğraf Mesleği Meslek Standartlarının Oluşturularak Resmi Gazetede Yayınlanması\n• TS EN ISO IEC 17020 Muayene Kuruluşu Kapsamında Doğalgaz Şebekesinin Her türlü Tasarımı ve Projelendirilmesi Kapsamında Yetki Alınması\n• TS EN ISO IEC 17020 Muayene Kuruluşu Kapsamında Hali Hazır Harita Yapımı, Kamulaştırma, Altyapı Bilgi Sistemleri Ve GIS Uygulamaları Kapsamında Yetki Alınması\n• İŞKUR Destekli Enerji ve Doğalgaz Sektörüne Yönelik Akrediteli Eğitim ve Belgelendirme Projesi\n• EİE Kapsamında EVD (Enerji Verimliliği Danışman Şirketi) Yetkisinin Alınması',
        sort_order: 3,
        created_at: NOW
    },
    {
        id: 4,
        type: 'experience',
        title: 'Teknik Şef',
        organization: 'İGDAŞ',
        start_date: '11 Yıl',
        end_date: '',
        description: 'İGDAŞ\'DA YAPILAN BAŞLICA PROJELER:\n• İstanbul İlk Sabit GPS İstasyonu Kurumu Projesi (2008)\n• GISWEB Bilgi Sistemi Harita Verilerinin İntranet Ortamından Yayınlanması Çalışması\n• 2003 İGDAŞ Çağrı Merkezi Projesi (2005)\n• İGDAŞ Harita Prosedürü Hazırlanması (ISO 9001)\n• İGDAŞ Harita Kontrol Talimatı Hazırlanması (ISO 9001)\n• İGDAŞ Harita Üretim Talimatı Hazırlanması (ISO 9001)\n• İGDAŞ Halihazır Harita Ve Asbuilt Üretim Teknik Şartname Komisyonu Üyeliği (2004)\n• İGDAŞ Halihazır Harita Ve Asbuilt Üretim Birim Fiyat Tesbit Komisyonu Üyeliği (2004)\n• İGDAŞ Etüd Proje Harita Müdürlüğü Faaliyetlerinde Tehlike Risk Analizlerinin Projelendirilmesi (OHSAS 18001)\n• İGDAŞ Beyoğlu Bölge Şebeke Birimlerinin Mobil Şebeke Olarak Hizmet Vermesi Projesinde Proje Grubunda Çalışmak\n• İGDAŞ Anadolu Bölge ve Beyoğlu Bölge Doğalgaz Hatlarının A Dan Z Kitapçığının Tasarım, Hazırlanış Aşamalarında Teknik Şef Görevi\n• İGABİS (İGDAŞ Altyapı Bilgi Sistemi) Projesi',
        sort_order: 4,
        created_at: NOW
    },
    {
        id: 5,
        type: 'experience',
        title: 'Proje Mühendisi',
        organization: 'BELDE Planlama Mimarlık Ltd. Şti.',
        start_date: '1997',
        end_date: '8 Ay',
        description: '',
        sort_order: 5,
        created_at: NOW
    },
    {
        id: 6,
        type: 'experience',
        title: 'Proje Mühendisi',
        organization: 'EMİ Harita Ltd. Şti.',
        start_date: '1996',
        end_date: '2 Ay',
        description: '',
        sort_order: 6,
        created_at: NOW
    },

    // Education
    { id: 7, type: 'education', title: 'Arazi Yönetimi - Doktora Programı', organization: 'Okan Üniversitesi', start_date: '', end_date: '', description: '', sort_order: 1, created_at: NOW },
    { id: 8, type: 'education', title: 'Gayrimenkul Değerleme Uzmanlığı', organization: 'Sermaye Piyasası Kurulu (SPK)', start_date: '', end_date: '', description: '', sort_order: 2, created_at: NOW },
    { id: 9, type: 'education', title: 'MBA (Pazarlama, Finans Yönetimi & Muhasebe)', organization: 'Yeditepe Üniversitesi', start_date: '', end_date: '', description: '', sort_order: 3, created_at: NOW },
    { id: 10, type: 'education', title: 'Harita Mühendisliği', organization: 'Yıldız Teknik Üniversitesi İnşaat Fakültesi', start_date: '', end_date: '', description: '', sort_order: 4, created_at: NOW },

    // Projects
    { id: 11, type: 'project', title: 'İstanbul Otopark Master Planı', organization: 'İSPARK A.Ş.', start_date: '2012', end_date: '2014', description: 'İstanbul genelinde otopark stratejisinin ve gelecek projeksiyonlarının belirlenmesi.', sort_order: 1, created_at: NOW },
    { id: 12, type: 'project', title: 'İstanbul Geneli Bisiklet Master Planı', organization: 'İSPARK A.Ş.', start_date: '', end_date: '', description: 'Sürdürülebilir ulaşım kapsamında bisiklet yolları ve entegrasyonu.', sort_order: 2, created_at: NOW },
    { id: 13, type: 'project', title: 'Tarabya & İstinye Tekne Parkları', organization: 'İSPARK A.Ş.', start_date: '', end_date: '', description: 'Deniz turizmine katkı sağlayan yüzer iskele ve tekne park çözümleri.', sort_order: 3, created_at: NOW },
    { id: 14, type: 'project', title: 'Alibeyköy Cep Otogarı', organization: 'İSPARK A.Ş.', start_date: '', end_date: '', description: 'Şehir içi trafik yoğunluğunu azaltmaya yönelik modern cep otogarı projesi.', sort_order: 4, created_at: NOW },
    { id: 15, type: 'project', title: '100.000 Kapasiteli Otopark Yatırımı', organization: 'İSPARK A.Ş.', start_date: '', end_date: '', description: 'İstanbul genelinde gerçekleştirilen kapsamlı otopark kapasite artış projeleri.', sort_order: 5, created_at: NOW },
    { id: 16, type: 'project', title: 'Heliport Master Planı', organization: 'İSPARK A.Ş.', start_date: '', end_date: '', description: 'Hava ulaşımı ve acil durum yönetimi için heliport noktalarının planlanması.', sort_order: 6, created_at: NOW },
    { id: 17, type: 'project', title: 'İstihdam Odaklı Doğalgaz Eğitimi', organization: 'UGETAM A.Ş.', start_date: '', end_date: '', description: 'İŞKUR ve GAZBİR işbirliğiyle nitelikli personel yetiştirme ve belgelendirme projesi.', sort_order: 7, created_at: NOW },
    { id: 18, type: 'project', title: 'CBS ve Topoğraf Meslek Standartları', organization: 'UGETAM A.Ş.', start_date: '', end_date: '', description: 'Sektörel meslek standartlarının oluşturularak Resmi Gazete\'de yayınlanması.', sort_order: 8, created_at: NOW },
    { id: 19, type: 'project', title: 'İstanbul İlk Sabit GPS İstasyonu', organization: 'İGDAŞ', start_date: '2008', end_date: '', description: 'Altyapı ve haritalama çalışmaları için referans sabit GPS istasyonu kurulumu.', sort_order: 9, created_at: NOW },
    { id: 20, type: 'project', title: 'İGABİS (İGDAŞ Altyapı Bilgi Sistemi)', organization: 'İGDAŞ', start_date: '', end_date: '', description: 'Konumsal verilerin yönetimi ve intranet üzerinden sunulması projesi.', sort_order: 10, created_at: NOW },
];

export const VIDEOS: Video[] = [
    { id: 1, title: 'Dr. Selami Balcı Dijital Vatan’da | Akıllı Şehircilik ve Otopark Dönüşümü', url: 'https://www.youtube.com/watch?v=r2pXWItCjZc', thumbnail_url: 'https://img.youtube.com/vi/r2pXWItCjZc/hqdefault.jpg', category: 'tv', published: 1, created_at: NOW },
    { id: 2, title: 'Dr. Selami Balcı – İstanbul’un Kentsel Dönüşümü ve Akıllı Şehir Stratejisi', url: 'https://www.youtube.com/watch?v=83-5UjXhJXE', thumbnail_url: 'https://img.youtube.com/vi/83-5UjXhJXE/hqdefault.jpg', category: 'tv', published: 1, created_at: NOW },
    { id: 3, title: 'Dr. Selami Balcı: Türkiye’de Otopark Yönetimi, Dijitalleşme ve Sektörün Geleceği', url: 'https://www.youtube.com/shorts/6TFIzER4SHg', thumbnail_url: 'https://i.ytimg.com/vi/6TFIzER4SHg/hqdefault.jpg', category: 'short', published: 1, created_at: NOW },
];

export const ACTIVITIES: Activity[] = [
    { id: 1, country: 'Suudi Arabistan', city: 'Riyadh', description: 'Riyadh Şehri Modern Otopark Sistemi Kurulması', year: '', sort_order: 1, created_at: NOW },
    { id: 2, country: 'Pakistan', city: 'Lahore', description: 'Lahore Şehri Otopark İşletim Sistemi Kurulması', year: '', sort_order: 2, created_at: NOW },
    { id: 3, country: 'Mısır', city: 'Kahire', description: 'Kahire Şehri Otopark İşletim Sistemi Kurulması', year: '', sort_order: 3, created_at: NOW },
    { id: 4, country: 'Fas', city: 'Rabat', description: 'Rabat Şehri Otopark İşletim Sistemi Kurulması', year: '', sort_order: 4, created_at: NOW },
    { id: 5, country: 'Arnavutluk', city: 'Tiran', description: 'Tiran Şehri Otopark İşletim Sistemi Kurulması', year: '', sort_order: 5, created_at: NOW },
    { id: 6, country: 'Romanya', city: 'Bükreş', description: 'Distri Gas, Bükreş Ve Tichilesti Şehirleri Fizibilite Projesi', year: '2007', sort_order: 6, created_at: NOW },
    { id: 7, country: 'Makedonya', city: 'Üsküp', description: 'Üsküp Büyükşehir Belediyesi Doğalgaz Fizibilite Projesi', year: '2006', sort_order: 7, created_at: NOW },
    { id: 8, country: 'İskoçya', city: 'Glasgow', description: 'Cardonald College Uluslar Arası Uygulamalı Eğitim İşbirliği Projesi', year: '2008-2010', sort_order: 8, created_at: NOW },
    { id: 9, country: 'Fransa', city: 'Paris', description: 'Gas De France Uygulamalı Doğal Gaz Eğitimi', year: '2007', sort_order: 9, created_at: NOW },
    { id: 10, country: 'Suudi Arabistan', city: 'Cidde', description: 'Kral Abdülaziz Üniversitesi, Doğal Gaz Eğitim Ve Laboratuar Merkezi Kurulması', year: '2009-2010', sort_order: 10, created_at: NOW },
    { id: 11, country: 'Almanya', city: 'Duisburg', description: 'SLV Ve Enerji Verimlilik Kurumları İle Uzaktan Eğitim Ve Kaynakçı Eğitimleri Geliştirilmesi', year: '2009-2010', sort_order: 11, created_at: NOW },
    { id: 12, country: 'Bosna Hersek', city: 'Saraybosna', description: 'Gaz Araştırmaları Merkezi, Sempozyum Organizasyon Ve Bildiri Yayınlanması', year: '2009', sort_order: 12, created_at: NOW },
    { id: 13, country: 'Romanya', city: 'Bükreş', description: 'Tractabel Engineering Enerji Verimliliği Projesi', year: '2010', sort_order: 13, created_at: NOW },
];

export const POSTS: Post[] = [
    {
        id: 1,
        title: 'Otopark Yönetiminde Yeni Dönem: Dijitalleşme',
        slug: 'otopark-yonetiminde-yeni-donem',
        excerpt: 'Şehirlerin en büyük sorunu olan otoparklar, dijital dönüşümle nasıl daha verimli hale gelir?',
        cover_url: '', // Optional or placeholder
        content: '# Otopark Yönetiminde Dijitalleşme\n\nGünümüzde artan araç sayısı ile birlikte otopark yönetimi...',
        published: 1,
        published_at: '2024-01-15T10:00:00Z',
        created_at: NOW,
        updated_at: NOW,
        tags_json: '[]'
    },
    {
        id: 2,
        title: 'Sürdürülebilir Şehircilik ve Ulaşım',
        slug: 'surdurulebilir-sehircilik-ve-ulasim',
        excerpt: 'Geleceğin şehirlerinde ulaşım planlaması insan odaklı olmak zorunda.',
        cover_url: '',
        content: '# Sürdürülebilir Ulaşım\n\nModern şehir planlamasında yaya öncelikli tasarımlar...',
        published: 1,
        published_at: '2023-12-20T14:30:00Z',
        created_at: NOW,
        updated_at: NOW,
        tags_json: '[]'
    }
];
