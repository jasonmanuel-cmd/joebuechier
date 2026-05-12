# Joe Buechler Real Estate Landing Page

Static, mobile-first landing page ready for GitHub + Vercel deployment.

## Included

- Full multi-section landing page in `index.html`
- Responsive styling in `css/styles.css`
- Lightweight interaction in `js/main.js`
- Real property and profile imagery wired from `pics/`

## Local Preview

Open `index.html` directly in a browser.

## Push to GitHub

Run from the project root:

```powershell
git init
git add .
git commit -m "feat: initial joe buechler landing page"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

Example repo URL format:

- `https://github.com/your-username/joebuechler-site.git`

## Deploy to Vercel

1. In Vercel, click **Add New Project**.
2. Import your GitHub repo.
3. Framework preset: **Other** (or auto-detected static site).
4. Build command: leave empty.
5. Output directory: leave empty.
6. Click **Deploy**.

## Notes

- Form submit currently uses a demo alert in `js/main.js`.
- Replace with your CRM/webhook endpoint when ready.
