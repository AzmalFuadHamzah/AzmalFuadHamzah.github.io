# Azmal Fuad Hamzah — Academic Portfolio

A custom, responsive academic portfolio built with Astro. The site source is
small and original, with project descriptions, posts, and gallery content
stored as Markdown files.

## Run the site on Windows

If Node.js is not installed, open PowerShell and run:

```powershell
winget install OpenJS.NodeJS.LTS
```

Close and reopen the terminal after installation. In PowerShell, from this
repository folder, run:

```powershell
npm install
npm run dev
```

`npm install` also creates `package-lock.json`; keep that file when committing
so future installs use the same dependency versions.

Open the local address printed in the terminal. Press `Ctrl+C` to stop the
preview. To check a production build locally, run:

```powershell
npm run build
npm run preview
```

## Edit the content

- **Profile, education, skills, projects, activities, and contact details:** `src/content/profile/profile.md`
- **Page layout and appearance:** `src/pages/index.astro` and `src/styles/site.css`
- **Additional standalone project pages:** Markdown files in `src/content/projects/`
- **Blog posts:** Markdown files in `src/content/posts/`
- **Gallery text and photo captions:** `src/content/gallery/gallery.md`
- **CV download:** `public/uploads/Azmal_Fuad_Hamzah_CV.pdf` (the original PDF; do not edit)
- **Profile photo:** `public/images/profile.jpg`

The theme button in the header switches between light and dark appearance and
remembers the selected mode in that browser.

The profile file is Markdown with a structured information block at the top.
You can change the text in that file without editing the Astro page or styles;
keep the field names and indentation in place when changing lists.

### Add a blog post

Create a new `.md` file inside `src/content/posts/`, for example
`src/content/posts/my-new-post.md`:

```markdown
---
title: My New Post
date: 2026-11-13
summary: A one-sentence introduction to the post.
---

Write the post here using plain Markdown.
```

### Add a project

Create a `.md` file in `src/content/projects/` with this front matter, then
write your description below it:

```markdown
---
title: Project title
summary: A short description for the project list.
order: 1
---

Describe your project here.
```

### Add photos to the gallery

1. Use photos you own or have permission to publish. Download your own photos
   from Instagram rather than linking to an Instagram page, which may not be
   visible to everyone.
2. Add `.jpg`, `.png`, or `.webp` image files to `public/images/gallery/`.
3. Add a Markdown image line to `src/content/gallery/gallery.md`:

   ```markdown
   ![Presenting a mathematics project](/images/gallery/presentation.jpg)
   ```

   Replace the caption and filename with accurate details. The image will then
   appear on the Gallery page.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the Astro site and
deploys it when changes reach `main`. In GitHub, open **Settings → Pages** and
select **GitHub Actions** as the source. After merging a pull request into
`main`, check the **Actions** tab for the deployment result.

To share your finished changes from a feature branch, run:

```powershell
git add -A
git commit -m "Replace portfolio with Astro"
git push -u origin HEAD
```

Then open a pull request to `main` on GitHub. Merge it after the build passes
to publish the new site.

See [LICENSE.md](LICENSE.md) for the repository license.
