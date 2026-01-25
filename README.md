# drselamibalci.com - Proje Kurulum ve Kullanım Rehberi

Bu proje Cloudflare Pages (Next.js), Cloudflare Workers (API) ve D1 Database kullanılarak hazırlanmış minimalist bir blog ve iletişim portalıdır.

## Ön Gereksinimler
- Node.js (v18+)
- Cloudflare Hesabı (Wrangler kurulumu için)
- `npm` paket yöneticisi

## Kurulum (Local Development)

1. **Bağımlılıkları Yükle**
   ```bash
   npm install
   ```

2. **D1 Veritabanını Hazırla (Local)**
   İlk kez çalıştırıyorsanız migration ve seed uygulayın:
   ```bash
   # Migration uygula
   npx wrangler d1 execute drselamibalci-db --local --file=infra/migrations/0001_init.sql -c apps/api/wrangler.toml

   # Seed verilerini ekle (Örnek yazılar)
   npx wrangler d1 execute drselamibalci-db --local --file=infra/seed.sql -c apps/api/wrangler.toml
   ```

3. **Geliştirme Sunucularını Başlat**

   **API (Worker):**
   ```bash
   cd apps/api
   npm run dev
   # http://localhost:8787 adresinde çalışır
   ```

   **Web (Next.js):**
   Yeni bir terminalde:
   ```bash
   cd apps/web
   # API URL'ini belirtin (varsayılan localhost:8787)
   NEXT_PUBLIC_API_URL=http://localhost:8787/api npm run dev
   # http://localhost:3000 adresinde çalışır
   ```

## Deploy (Canlıya Alma)

### 1. D1 Veritabanı Oluşturma
Cloudflare üzerinde gerçek database oluşturun:
```bash
npx wrangler d1 create drselamibalci-db
```
Çıkan `database_id` değerini `apps/api/wrangler.toml` dosyasına yapıştırın.

### 2. Migration & Seed (Prod)
```bash
npx wrangler d1 execute drselamibalci-db --remote --file=infra/migrations/0001_init.sql -c apps/api/wrangler.toml
npx wrangler d1 execute drselamibalci-db --remote --file=infra/seed.sql -c apps/api/wrangler.toml
```

### 3. Secret Tanımları
Turnstile anahtarlarını ve Admin şifresini ekleyin:
```bash
cd apps/api
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put ADMIN_PASSWORD
npx wrangler secret put JWT_SECRET
```

### 4. API Deploy
```bash
cd apps/api
npm run deploy
```

### 5. Web Deploy (Pages)
GitHub reposuna bağlayarak otomatik deploy yapmanız önerilir.
- **Build Command:** `npx @cloudflare/next-on-pages`
- **Output Directory:** `.vercel/output/static` (veya `.next` next-on-pages ayarına göre değişebilir, genellikle `.vercel/output/static` veya `out`)
- **Root Directory:** `apps/web`

VEYA manuel deploy:
```bash
cd apps/web
npm run build
npx wrangler pages deploy .vercel/output/static --project-name drselamibalci-web
```

## Admin API Kullanımı
Admin paneli arayüzü yoktur. İçerik yönetimi için HTTP istekleri kullanın.

**Giriş:**
`POST /api/admin/login` -> `{password: "sifreniz"}` -> Dönen token'ı saklayın.

**Yazı Ekleme:**
`POST /api/admin/posts`
Header: `Authorization: Bearer <TOKEN>`
Body:
```json
{
  "title": "Yeni Yazı",
  "slug": "yeni-yazi-slug",
  "content": "<p>İçerik...</p>",
  "published": true
}
```
