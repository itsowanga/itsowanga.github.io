# Portfolio Website

Personal portfolio site for Sowanga Mbane. BSc Computer Science graduate
(University of Cape Town), currently an ERP Systems Consultant at SYSPRO,
transitioning into Data Engineering with an Azure focus (DP-700 in progress).
There are no Data Engineering projects to showcase yet — the site documents
the journey itself, starting from Day 1, rather than overstating experience
that doesn't exist yet.

## Pages

- `index.html` - Home page with overview, skills, work experience, education,
  certifications, and contact links.
- `journey.html` - Vertical timeline of real milestones (certifications,
  graduation, career moves). Self-contained and easy to extend — see the
  comment block at the top of the file for instructions on adding a new entry.
- `contact.html` - Contact page.

## View Locally

1. Open `index.html` in your browser.
2. Navigate using the links in the site header and page content.

## Updating the Journey Timeline

Open `journey.html` and follow the instructions in the HTML comment near the
top of the `<style>` block and again just above the `<div class="timeline">`.
In short: copy a `.timeline-item` block, paste it at the top of the timeline
(newest first), edit the icon/date/title/description, and update the number
in `.stat-number` to match the new total. No other file needs to change.

## Assets

- `style.css` - Shared styles.
- `assets/` - Images, logo, and resume.

## Tech

Static HTML. No build step, no frameworks.

## Contact

- Email: `sowanga.mbane@gmail.com`
- LinkedIn: https://www.linkedin.com/in/sowanga-mbane
- GitHub: https://github.com/itsowanga
