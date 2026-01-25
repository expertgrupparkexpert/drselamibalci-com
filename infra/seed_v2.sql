-- Seed Data for Videos, Activities, and Pages (Phase 2)

-- Videos
INSERT INTO videos (title, url, thumbnail_url, category, published) VALUES
('TVNET Özel Yayını', 'https://www.youtube.com/embed/S_TgaX6d59U', 'https://img.youtube.com/vi/S_TgaX6d59U/hqdefault.jpg', 'tv', 1),
('Dijital Vatan''da Akıllı Şehircilik', 'https://www.youtube.com/embed/EXAMPLE2', 'https://img.youtube.com/vi/EXAMPLE2/hqdefault.jpg', 'tv', 1),
('Sektörün Geleceği | TOBFED', 'https://www.youtube.com/embed/EXAMPLE3', 'https://img.youtube.com/vi/EXAMPLE3/hqdefault.jpg', 'short', 1);

-- Activities
INSERT INTO activities (country, city, description, year, sort_order) VALUES
('Suudi Arabistan', 'Riyad', 'Riyadh Şehri Modern Otopark Sistemi Kurulması', '2023', 1),
('Pakistan', 'Lahore', 'Lahore Şehri Otopark İşletim Sistemi Kurulması', '2022', 2),
('Mısır', 'Kahire', 'Kahire Şehri Otopark İşletim Sistemi Kurulması', '2021', 3),
('Fas', 'Rabat', 'Rabat Şehri Otopark İşletim Sistemi Kurulması', '2020', 4),
('Arnavutluk', 'Tiran', 'Tiran Şehri Otopark İşletim Sistemi Kurulması', '2019', 5);

-- Pages (About, Expertise)
INSERT INTO pages (slug, title, content, image_url, meta_description) VALUES
('about', 'Hakkında', '<p>Dr. Selami Balcı, şehircilik, gayrimenkul geliştirme, değerleme ve sürdürülebilir mobilite alanlarında uzman bir iş insanıdır...</p>', '/about-photo.jpg', 'Dr. Selami Balcı hakkında detaylı bilgi, biyografi ve kariyer geçmişi.'),
('expertise', 'Uzmanlık Alanları', '<p>Sürdürülebilir Mobilite ve Otopark Yönetimi konusunda uzmanlaşmıştır.</p>', NULL, 'Dr. Selami Balcı''nın uzmanlık alanları: Kentsel Dönüşüm, Otopark Yönetimi, Akıllı Şehirler.');
