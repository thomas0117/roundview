# Roundview

Next.js + Supabase 專案，提供環境保育文章的瀏覽與管理。除了一般訪客可以在 `/articles` 查看文章，新增的管理員介面可以直接把文章寫入 Supabase，並即時顯示在前台。

## 開發環境

1. 建立 `.env.local`，並設定 Supabase 與管理員所需的環境變數：

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_SECRET=隨機字串，自行設定
# 可選：覆寫文章封面儲存的 Supabase bucket 名稱（預設 post-images）
SUPABASE_POST_IMAGE_BUCKET=post-images
```

2. 安裝依賴並啟動開發伺服器：

```bash
npm install
npm run dev
```

## 管理員新增文章

1. 確認伺服器端的 `.env.local` 已經設定好 `ADMIN_SECRET` 並重新啟動服務。
2. 在瀏覽器直接前往 `/admin`，即可看到「管理員專區」表單。
3. 於頁面頂部輸入後端設定的 `ADMIN_SECRET`（此密鑰不會顯示在前端程式碼）。
4. 填寫文章的標題、Slug、摘要、首圖（可直接上傳圖片，檔案會存入 Supabase Storage 的 `post-images` bucket）、內文、發佈日期與發佈狀態後提交。
5. 送出後，後端會透過 Supabase Service Role 把資料寫入 `posts` 表，並立即反映在 `/articles` 列表與文章詳細頁。

> **注意：**
> - `ADMIN_SECRET` 不會輸出到前端程式碼，請透過安全的方式提供給管理員。
> - 發佈日期欄位可空白，預設為建立當下的時間。
> - 若要使用圖片上傳，請先在 Supabase 建立公開的 `post-images` bucket（或自訂 `SUPABASE_POST_IMAGE_BUCKET`），並授權對應存取規則。
