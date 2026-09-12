# CONSEG - Institutional Website

Institutional website for **CONSEG**, the Research Group on Systems Reliability and Security of the Graduate Program in Computer Science at the Polytechnic School of PUCRS.

The site presents the group's research focus, team members, ongoing projects, and links to publications.

## Pages

- **Home** (`index.html`) — introduction to the group, research focus, and team section
- **Projects** (`projects.html`) — list of research projects, rendered dynamically from `projects.js`
- **Publications** — external link to the group's Google Scholar profile
- **GitHub** — link to the group's GitHub organization

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

No build step or dependencies are required — it's a static site.

## Project Structure

```
├── index.html          # Home page
├── projects.html        # Projects page
├── projects.js          # Project data / rendering logic
├── css/
│   ├── global/           # Base styles
│   ├── header/           # Navigation bar and logo
│   ├── sections/         # Sections (about, people, topics)
│   └── pages/            # Page-specific styles
└── imagens/             # Images, icons, and team photos
