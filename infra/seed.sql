-- Dr. Selami Balcı İçerik Verileri (Seed Data)

-- 1. Temizle (Geliştirme aşamasında tekrar tekrar çalıştırılabilir olması için)
DELETE FROM posts;
DELETE FROM videos;
DELETE FROM activities;
DELETE FROM resume_items;

-- 2. CV: Eğitim (Education)
INSERT INTO resume_items (type, title, organization, start_date, end_date, description, sort_order) VALUES
('education', 'Doktora (PhD) - Şehircilik', 'İstanbul Teknik Üniversitesi', '2015', '2020', 'Otopark Yönetimi ve Kentsel Hareketlilik üzerine tez çalışması.', 1),
('education', 'Yüksek Lisans', 'Yıldız Teknik Üniversitesi', '2012', '2015', 'Harita Mühendisliği Anabilim Dalı.', 2),
('education', 'Lisans', 'Karadeniz Teknik Üniversitesi', '2007', '2012', 'Harita Mühendisliği Bölümü.', 3);

-- 3. CV: Deneyim (Experience)
INSERT INTO resume_items (type, title, organization, start_date, end_date, description, sort_order) VALUES
('experience', 'Genel Müdür', 'Expert Group', '2023', 'Günümüz', 'Şehir içi otopark çözümleri ve danışmanlık hizmetleri.', 1),
('experience', 'Yönetim Kurulu Üyesi', 'İSPARK A.Ş.', '2019', '2023', 'İstanbul genelinde 500+ lokasyonun stratejik yönetimi.', 2);

-- 4. Videolar & Medya
INSERT INTO videos (title, url, thumbnail_url, category, published) VALUES
('Dr. Selami Balcı Dijital Vatan’da | Akıllı Şehircilik ve Otopark Dönüşümü', 'https://www.youtube.com/watch?v=r2pXWItCjZc', 'https://img.youtube.com/vi/r2pXWItCjZc/hqdefault.jpg', 'tv', 1);

-- 5. Yurtdışı Faaliyetler (Activities)
INSERT INTO activities (country, city, description, year, sort_order) VALUES
('Almanya', 'Berlin', 'Avrupa Otopark Birliği (EPA) Kongresi Katılımı', '2022', 1),
('Hollanda', 'Amsterdam', 'Intertraffic Fuarı ve Teknik İncelemeler', '2021', 2),
('Japonya', 'Tokyo', 'Akıllı Ulaşım Sistemleri (ITS) Zirvesi', '2019', 3);

-- 6. Blog Yazıları (Posts)
INSERT INTO posts (title, slug, excerpt, content, published, published_at) VALUES
(
    'Otopark Yönetiminde Yeni Dönem: Dijitalleşme', 
    'otopark-yonetiminde-yeni-donem', 
    'Şehirlerin en büyük sorunu olan otoparklar, dijital dönüşümle nasıl daha verimli hale gelir?', 
    '# Otopark Yönetiminde Dijitalleşme\n\nGünümüzde artan araç sayısı ile birlikte otopark yönetimi...', 
    1, 
    '2024-01-15T10:00:00Z'
),
(
    'Sürdürülebilir Şehircilik ve Ulaşım', 
    'surdurulebilir-sehircilik-ve-ulasim', 
    'Geleceğin şehirlerinde ulaşım planlaması insan odaklı olmak zorunda.', 
    '# Sürdürülebilir Ulaşım\n\nModern şehir planlamasında yaya öncelikli tasarımlar...', 
    1, 
    '2023-12-20T14:30:00Z'
);
