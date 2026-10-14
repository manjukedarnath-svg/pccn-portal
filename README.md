# pccn-portal
## Hands-on workshop (PCCN Essentials app) integration
- `pccn-app-config.js` holds the app's address. My Courses shows a "Hands-on workshop" card; its button POSTs the learner's Firebase ID token to the app's `/portal` route, which signs them in with the same account.
- The app writes `users/{uid}.progress.workshop` (`{workshopId, edition, venue, date, score, total, pct, pass, certificateId, ...}`) with a service account. My Courses reads it for the card and the certification pathway; the course certificate step needs all 12 modules and `progress.workshop.pass`.
- Admin page: "Workshop" column (result and venue) and an "Organiser" checkbox per learner. Ticking it sets `users/{uid}.roles.organiser = true`, which lets that learner run workshops in the app without the admin passcode.
- `firestore.rules` now allow learners to update their own document (module progress) without touching `roles` or `progress.workshop`, and admins to change `roles` only. Publish the rules after merging.

## Admin console (PCCN_Admin.html)
Admins are accounts listed in the `admins` collection; "Admin" appears in the nav for them. The first admin is created in the Firebase console (add a document whose ID is your user UID); after that admins add and remove each other from the Admins tab.
- **Learners**: every account with enrolment status, module scores, workshop result and roles; tap a row for answers and actions (organiser, admin, enrolment, reset module progress, record or clear a workshop manually); CSV and .doc downloads.
- **Enrolments**: the allowlist (`enrolments/{email}`) loaded from the registration sheet (paste or CSV/XLSX) or one at a time. With **Require enrolment** on (Settings), module pages and My Courses show a message to anyone not on the list; admins are never locked out.
- **Settings** (`config/site`, `config/videos`): course start and registration deadline (drive the My Courses countdown), an announcement banner, and video links per module slot — a saved link makes that placeholder on the module page open the video.
- **Competency**: submissions to the self-assessment (`c.html`, open to any nurse, no login) with counts, latest entries, and the link to the results page where unit heads verify and record Stage II. Each learner's latest submission shows in the Learners table and detail; My Courses shows the learner her own status.
- **Hospital course director** (`users/{uid}.roles = { director: true, hospital }`, set from a learner's record): sees "Verify competencies" in the nav and on My Courses, opens the results page locked to their hospital, and can record Stage II only for submissions whose unit matches. Admins see every hospital.
- `pccn-gate.js` (included on module and nav pages after `pccn-auth.js`) applies the settings, the enrolment gate and the admin nav link. Publish `firestore.rules` after merging: it adds the `enrolments`, `config` and `admins` rules.
