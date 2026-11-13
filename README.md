# Azmal Fuad Hamzah — Academic Portfolio

This repository contains the Markdown content and files for my academic
portfolio.

## Edit the site without coding

The pages and articles are written in Markdown. To edit them in GitHub, open a
file, choose the pencil icon, make your text changes, and commit them.

- **Homepage biography, research interests, education, and contact links:**
  `content/_index.md`
- **Education, research experience, skills, and activities:**
  `content/experience.md`
- **Research project pages:** files inside `content/projects/`
- **CV download:** `static/uploads/resume.pdf`
- **Profile photo:** `assets/media/authors/me.jpg`

### Add a blog post

1. In GitHub, choose **Add file → Create new file**.
2. For the file name, enter `content/blog/my-first-post/index.md`. Replace
   `my-first-post` with a short name for your article.
3. Paste this starter text, then write your article under the final `---`:

   ```markdown
   ---
   title: "My first post"
   date: 2026-11-13
   ---

   Start writing your post here in plain Markdown.
   ```

4. Choose **Commit changes**. After the change is on the `main` branch, GitHub
   Actions builds and publishes the updated site.

## Publishing

In the repository on GitHub, open **Settings → Pages** and set the source to
**GitHub Actions**. The included workflow deploys when changes reach `main`.
The **Actions** tab shows whether the latest build and deployment succeeded.

## Optional local preview

To preview the site on your computer, install Hugo Extended, Node.js, and pnpm.
Then open a terminal in this repository and run:

```text
pnpm install
pnpm run dev
```

The terminal prints the local preview address.

See [LICENSE.md](LICENSE.md) for this repository's license.
