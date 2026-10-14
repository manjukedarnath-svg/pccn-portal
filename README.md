# pccn-portal
## Hands-on workshop (PCCN Essentials app) integration
- `pccn-app-config.js` holds the app's address. My Courses shows a "Hands-on workshop" card; its button POSTs the learner's Firebase ID token to the app's `/portal` route, which signs them in with the same account.
- The app writes `users/{uid}.progress.workshop` (`{workshopId, edition, venue, date, score, total, pct, pass, certificateId, ...}`) with a service account. My Courses reads it for the card and the certification pathway; the course certificate step needs all 12 modules and `progress.workshop.pass`.
- Admin page: "Workshop" column (result and venue) and an "Organiser" checkbox per learner. Ticking it sets `users/{uid}.roles.organiser = true`, which lets that learner run workshops in the app without the admin passcode.
- `firestore.rules` now allow learners to update their own document (module progress) without touching `roles` or `progress.workshop`, and admins to change `roles` only. Publish the rules after merging.
