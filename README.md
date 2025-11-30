# Roundview

Next.js + Supabase 專案，提供環境保育文章的瀏覽與管理。除了一般訪客可以在 `/articles` 查看文章，新增的管理員介面可以直接把文章寫入 Supabase，並即時顯示在前台。

## 開發環境

1. 建立 `.env.local`，並設定 Supabase 與管理員所需的環境變數：

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_SECRET=隨機字串，自行設定
```

2. 安裝依賴並啟動開發伺服器：

```bash
npm install
npm run dev
```

3. 設定 Supabase Storage（文章首圖）：

   - 在 Supabase Storage 介面建立名稱為 `article-covers` 的 Bucket，並將其存取權限設為 **Public**。
   - 若專案啟用 Storage RLS，請新增一條 Policy 允許 `anon` 角色對 `article-covers` Bucket 執行 `SELECT`，以確保前台可以直接讀取圖片。
   - 若 Bucket 名稱需要調整，請同步修改 `app/api/admin/posts/route.ts` 中 `supabaseAdmin.storage.from('article-covers')` 的設定。

## 管理員新增文章

1. 確認伺服器端的 `.env.local` 已經設定好 `ADMIN_SECRET` 並重新啟動服務。
2. 在瀏覽器直接前往 `/admin`，即可看到「管理員專區」表單。
3. 於頁面頂部輸入後端設定的 `ADMIN_SECRET`（此密鑰不會顯示在前端程式碼）。
4. 填寫文章的標題、Slug、摘要、內文、發佈日期與發佈狀態，並上傳首圖後提交（首圖會自動上傳至 `article-covers` Bucket 並產出公開網址）。
5. 送出後，後端會透過 Supabase Service Role 把資料寫入 `posts` 表，並立即反映在 `/articles` 列表與文章詳細頁，圖片亦會同步顯示。

> **注意：**
> - `ADMIN_SECRET` 不會輸出到前端程式碼，請透過安全的方式提供給管理員。
> - 發佈日期欄位可空白，預設為建立當下的時間。
