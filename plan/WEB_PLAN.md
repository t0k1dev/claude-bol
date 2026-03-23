# Web Plan - Claude Community

## Overview

A single-page landing site that presents the Claude developer community and captures interest through two paths: subscribing for updates and applying to join the organizing team.

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React (Vite) | UI framework |
| Styling | Tailwind CSS | Utility-first styling |
| Backend/DB | Firebase Firestore | Store subscriber and organizer form data |
| Hosting | Netlify | Build, deploy, and host the site |

## Site Structure

Single page with the following sections (top to bottom):

```
[Hero]
  - Community name / logo
  - Tagline: what the community is about
  - CTA button: "Subscribe" (scrolls to subscribe section)

[About]
  - Brief description of the community (2-3 sentences)
  - Key values (from CHARTER.md): openness, quality, collaboration
  - What members get: events, resources, networking with Claude developers

[Subscribe]
  - Heading: "Stay in the loop"
  - Simple form: name + email
  - Submit -> saves to Firebase Firestore collection `subscribers`
  - Success message on submit

[Organize]
  - Heading: "Help us build this"
  - Brief description of what organizing involves
  - Simple form: name + email + short message (why you want to help)
  - Submit -> saves to Firebase Firestore collection `organizers`
  - Success message on submit

[Footer]
  - GitHub link
  - Community guidelines link
  - Copyright
```

## Firebase Setup

### Firestore Collections

**`subscribers`**
```
{
  name: string,
  email: string,
  createdAt: timestamp
}
```

**`organizers`**
```
{
  name: string,
  email: string,
  message: string,
  createdAt: timestamp
}
```

### Firestore Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /subscribers/{doc} {
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'createdAt'])
                    && request.resource.data.name is string
                    && request.resource.data.email is string;
      allow read, update, delete: if false;
    }
    match /organizers/{doc} {
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'message', 'createdAt'])
                    && request.resource.data.name is string
                    && request.resource.data.email is string
                    && request.resource.data.message is string;
      allow read, update, delete: if false;
    }
  }
}
```

Write-only from the client. Read/update/delete restricted to admin (Firebase Console or Admin SDK).

## Project Structure

```
claude-bol/
  web/
    public/
      favicon.ico
    src/
      components/
        Hero.jsx
        About.jsx
        SubscribeForm.jsx
        OrganizeForm.jsx
        Footer.jsx
      lib/
        firebase.js          # Firebase config and init
      App.jsx
      main.jsx
      index.css              # Tailwind directives
    .env                     # Firebase config keys (not committed)
    index.html
    package.json
    tailwind.config.js
    vite.config.js
    netlify.toml
```

## Implementation Phases

### Phase 1 - Scaffold (est. 1-2 hours)

- [ ] Init Vite + React project in `web/`
- [ ] Install dependencies: `tailwindcss`, `firebase`, `postcss`, `autoprefixer`
- [ ] Configure Tailwind
- [ ] Configure Vite
- [ ] Create `netlify.toml` with build settings

### Phase 2 - UI Components (est. 2-3 hours)

- [ ] Build `Hero` section with CTA
- [ ] Build `About` section with community values
- [ ] Build `SubscribeForm` with validation
- [ ] Build `OrganizeForm` with validation
- [ ] Build `Footer`
- [ ] Assemble in `App.jsx`
- [ ] Responsive design (mobile-first with Tailwind breakpoints)

### Phase 3 - Firebase Integration (est. 1-2 hours)

- [ ] Create Firebase project
- [ ] Configure Firestore database
- [ ] Set up Firestore security rules
- [ ] Add Firebase config to `.env`
- [ ] Implement `lib/firebase.js`
- [ ] Connect forms to Firestore write operations
- [ ] Add loading and success/error states to forms

### Phase 4 - Deploy (est. 30 min)

- [ ] Connect GitHub repo to Netlify
- [ ] Set environment variables in Netlify dashboard
- [ ] Configure build command: `npm run build`
- [ ] Configure publish directory: `dist`
- [ ] Test deployment
- [ ] Verify forms work in production

## Netlify Config

```toml
[build]
  base = "web/"
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Design Notes

- Clean, minimal aesthetic. White background, dark text, one accent color.
- Tailwind default color palette is fine to start. Can customize later.
- No authentication needed. Forms are anonymous write-only.
- No pages or routing needed. Single scroll page.
- Keep JS bundle small. Only dependency beyond React is the Firebase SDK (consider using just `firebase/firestore` to reduce bundle size).

## Environment Variables

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

These go in `.env` locally and in Netlify's environment variable settings for production.
