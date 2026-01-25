-- Seed Data for Resume Items (Phase 3)

-- EDUCATION
INSERT INTO resume_items (type, title, organization, start_date, end_date, description, sort_order) VALUES
('education', 'Doktora - Arazi Yönetimi', 'Okan Üniversitesi', NULL, NULL, 'Arazi Yönetimi alanında doktora.', 1),
('education', 'MBA (Pazarlama, Finans Yönetimi, Muhasebe)', 'Yeditepe Üniversitesi', NULL, NULL, 'İşletme Yüksek Lisans (MBA).', 2),
('education', 'Harita Mühendisliği', 'Yıldız Teknik Üniversitesi', NULL, NULL, 'İnşaat Fakültesi, Harita Mühendisliği bölümü.', 3),
('education', 'Sermaye Piyasası Kurulu Gayrimenkul Değerleme Uzmanlığı', 'SPK', NULL, NULL, 'Gayrimenkul Değerleme Uzmanlığı lisansı.', 4);

-- EXPERIENCE
INSERT INTO resume_items (type, title, organization, start_date, end_date, description, sort_order) VALUES
('experience', 'Genel Koordinatör', 'EXPERTGRUP', '2018', 'Present', 'Şehirlerin geleceğini şekillendirecek markaları tek çatı altında toplayan Expert Grup bünyesinde genel koordinasyon.', 1),
('experience', 'ARGE Müdürü', 'İSPARK A.Ş.', NULL, NULL, 'Araştırma ve Geliştirme müdürü olarak görev yaptı.', 2),
('experience', 'Teknik İşler Müdürü', 'İSPARK A.Ş.', NULL, NULL, 'Teknik operasyonların yönetimi.', 3),
('experience', 'Etüd Planlama Müdürü', 'İSPARK A.Ş.', NULL, NULL, 'Etüd ve planlama süreçlerinin yönetimi.', 4),
('experience', 'Denetim Koordinatörü', 'UGETAM A.Ş.', NULL, NULL, 'Denetim süreçlerinin koordinasyonu.', 5),
('experience', 'Eğitim & İş Geliştirme Müdürü', 'UGETAM A.Ş.', NULL, NULL, 'Eğitim faaliyetleri ve iş geliştirme projeleri.', 6),
('experience', 'Teknik Şef (11 Yıl)', 'İGDAŞ', NULL, NULL, 'İGDAŞ bünyesinde 11 yıl teknik şeflik tecrübesi.', 7),
('experience', 'Proje Mühendisi', 'BELDE Planlama Mimarlık Ltd. Şti.', '1997', '1998', 'Proje Mühendisi olarak görev yaptı.', 8),
('experience', 'Proje Mühendisi', 'EMİ Harita Ltd. Şti.', '1996', '1997', 'Proje Mühendisi olarak görev yaptı.', 9);

-- AWARDS
INSERT INTO resume_items (type, title, organization, start_date, end_date, description, sort_order) VALUES
('award', 'En İyi Poster Sunum Ödülü', 'KTÜ CBS Kongresi Trabzon', '2007', '2007', 'Kasım 2007 Trabzon KTÜ CBS Kongresi En İyi Poster Sunum Ödülü.', 1);

-- UPDATE PREVIOUS ACTIVITIES (To match CV details better if needed via UPDATE, but here just Resume Items)
-- Adding explicit projects into resume items as 'project' type if we want to show them in CV timeline too, 
-- but we already have 'activities' table for international ones. Let's keep main projects here.

INSERT INTO resume_items (type, title, organization, start_date, end_date, description, sort_order) VALUES
('project', 'İstanbul Geneli 100.000 Kapasiteli Otopark Yatırım Süreci', 'İSPARK A.Ş.', NULL, NULL, 'İstanbul geneli otopark yatırım süreçlerinin yönetimi.', 1),
('project', 'Tarabya İstinye Tekne Park İnşaatı', 'İSPARK A.Ş.', NULL, NULL, 'Tekne park inşaat projesi.', 2),
('project', 'Alibeyköy Otogar İnşaatı', 'İSPARK A.Ş.', NULL, NULL, 'Otogar inşaat projesi.', 3),
('project', 'İstanbul Geneli Hizmet Noktaları Kapsamlı Bakım Onarım Projesi', 'İSPARK A.Ş.', NULL, NULL, 'Bakım onarım projesi.', 4),
('project', 'İstanbul Otopark Master Planı', 'İSPARK A.Ş.', NULL, NULL, 'Otopark master planının hazırlanması.', 5),
('project', 'İstanbul Geneli Bisiklet Master Planı', 'İSPARK A.Ş.', NULL, NULL, 'Bisiklet master planı.', 6),
('project', 'İstanbul Geneli Heliport Master Planı', 'İSPARK A.Ş.', NULL, NULL, 'Heliport master planı.', 7),
('project', 'Stratejik Plan (Son İki Periyot)', 'İSPARK A.Ş.', NULL, NULL, 'Stratejik planlama çalışmaları.', 8),
('project', 'Otopark Mevzuat Çalıştayı', 'İSPARK A.Ş.', NULL, NULL, 'Mevzuat çalıştayı organizasyonu.', 9),
('project', 'Araç Park Alanları Yönetimi Uluslararası Sempozyumu', 'İSPARK A.Ş.', NULL, NULL, 'Uluslararası sempozyum.', 10),
('project', 'İstanbul Geneli Yol Üstü Otoparkları Reel Ciro Tespit Çalışması', 'İSPARK A.Ş.', NULL, NULL, 'Ciro tespit çalışmaları.', 11);
