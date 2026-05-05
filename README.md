# cmo-bio
CMO Portfolio and Blog
# CMO.bio — Maria Artemeva

Personal portfolio and blog site.  
Live: [cmo.bio](https://cmo.bio) · Preview: [startupmarketing-creator.github.io/cmo-bio](https://startupmarketing-creator.github.io/cmo-bio)

---

## File structure

```
cmo-bio/
├── index.html              ← Main site (do not edit)
├── post.html               ← Article template (do not edit)
├── posts.json              ← ✏️ ADD NEW POSTS HERE
├── tags.json               ← ✏️ ADD NEW TAGS HERE
├── CNAME                   ← Domain setting (do not edit)
├── README.md               ← This file
└── images/
    └── blog/
        ├── covers/         ← Article cover images
        └── content/        ← Images inside articles
    └── experience/         ← Company logos and slides
    └── about/              ← Profile photo
    └── ui/                 ← Favicon, og-image
```

---

## How to add a new post

1. Add cover image to `images/blog/covers/` — name it clearly, e.g. `my-post-title.png`
2. Open `posts.json`
3. Copy the block below and paste it at the **top** of the list (after the opening `[`)
4. Fill in all fields
5. Save → Commit → Sync

### Post template

```json
{
  "id": "url-friendly-title",
  "title": "Full Post Title",
  "subtitle": "One or two sentences shown in the preview card on the homepage.",
  "date": "2026-05-05",
  "tags": ["crm", "retention"],
  "cover": "images/blog/covers/your-cover-image.png",
  "reposts": {
    "linkedin": "https://linkedin.com/pulse/...",
    "telegram": "https://t.me/..."
  },
  "body": "## Section heading\n\nParagraph text here.\n\n> This is a pull quote\n\n![Caption](images/blog/content/illustration.png)\n\n### Sub-heading\n\nMore text here.",
  "published": true
},
```

### Field reference

| Field | Required | Description |
|---|---|---|
| `id` | ✅ | URL slug — Latin letters and hyphens only, e.g. `ogilvy-was-wrong` |
| `title` | ✅ | Full article title |
| `subtitle` | ✅ | Preview text shown on homepage card |
| `date` | ✅ | Publication date — can be in the past for old articles |
| `tags` | ✅ | Array of tag IDs from `tags.json` |
| `cover` | ✅ | Path to cover image |
| `reposts` | ➖ | Links where article is reposted (linkedin, telegram, etc.) |
| `body` | ✅ | Full article text in Markdown format |
| `published` | ✅ | `true` = visible, `false` = draft (hidden from site) |

---

## How to add a new tag

Open `tags.json` and add a line:

```json
{ "id": "new-tag", "label": "New Tag" }
```

Rule: `id` must be Latin letters and hyphens only. `label` is what visitors see.

---

## Image naming rules

- Use Latin letters only — no Cyrillic, no spaces
- Use hyphens instead of spaces: `my-post-cover.png` ✅ `my post cover.png` ❌
- Be descriptive: `want-better-conversions.png` ✅ `img1.png` ❌
- Covers go in: `images/blog/covers/`
- In-article images go in: `images/blog/content/`

---

## Markdown cheatsheet for body text

```
## Heading level 2
### Heading level 3

Regular paragraph text.

> Pull quote — something memorable

**Bold text**

![Image caption](images/blog/content/filename.png)

[Link text](https://url.com)
```

---

## How to publish changes

In VS Code:
1. Click the **Source Control** icon (branch icon, left sidebar)
2. Click **+** next to changed files
3. Type a commit message e.g. `Add post: Ogilvy was wrong`
4. Click **Commit**
5. Click **Sync**

Site updates within 1–2 minutes.

---

## Tag reference

See `tags.json` for the full list of available tags.

Current tags: `crm` · `retention` · `acquisition` · `attention` · `creative` · `ltv` · `saas` · `b2b` · `b2c` · `strategy` · `analytics` · `gtm` · `seasonality` · `product` · `conversion` · `brand` · `content` · `loyalty` · `pricing` · `ab-testing`