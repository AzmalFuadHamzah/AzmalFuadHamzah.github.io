---
# Leave the homepage title empty to use the site title
title: ''
summary: 'Academic portfolio of Azmal Fuad Hamzah'
date: 2022-10-24
type: landing

sections:
  - block: resume-biography-3
    content:
      # Profile `me` is in `data/authors/me.yaml`; its photo is `assets/media/authors/me.jpg`.
      username: me
      text: >-
        I am an undergraduate student pursuing a B.Sc. (Hons.) in Mathematics at
        Kishoreganj University, Bangladesh. My academic interests include
        computational fluid dynamics, heat transfer, numerical methods, and
        mathematical modeling. I use COMSOL Multiphysics, ANSYS, and MATLAB in
        my work on fluid-flow and thermal problems, and hope to pursue graduate
        study in applied mathematics or data science.
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: 'About Me'
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md # Options: xs, sm, md, lg (default), xl
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: markdown
    id: research
    content:
      title: 'Research Interests'
      subtitle: 'Questions and methods that shape my academic work'
      text: |-
        My interests include computational fluid dynamics, heat transfer,
        hydrodynamics, fluid flow and vortex shedding, numerical simulation,
        and energy-cost optimization.
    design:
      columns: '1'
  - block: markdown
    content:
      title: Education
      text: |-
        - **B.Sc. (Hons.) in Mathematics** — Kishoreganj University
          (February 2022–May 2027, expected) · CGPA: 3.63/4.00
        - **Higher Secondary Certificate (Science)** — Sristy College of Tangail
          (2021) · GPA: 4.83/5.00
        - **Secondary School Certificate (Science)** — Kalta Avoya Charan High School
          (2019) · GPA: 4.06/5.00

        [More education and experience](/experience/)
    design:
      columns: '1'
  - block: collection
    content:
      title: Research Projects
      filters:
        folders:
          - projects
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: writing
    content:
      title: Latest Writing
      filters:
        folders:
          - blog
      count: 3
    design:
      view: article-grid
      columns: 2
  - block: markdown
    id: contact
    content:
      title: Get in touch
      text: |-
        I welcome academic and research conversations.

        - **Email:** [azmal.fuad.hamzah.afh@gmail.com](mailto:azmal.fuad.hamzah.afh@gmail.com)
        - **GitHub:** [AzmalFuadHamzah](https://github.com/AzmalFuadHamzah)
        - **LinkedIn:** [azmal-fuad-hamzah](https://www.linkedin.com/in/azmal-fuad-hamzah/)
        - **Facebook:** [azmal.fuad.hamzah.bd](https://facebook.com/azmal.fuad.hamzah.bd)
        - **Instagram:** [azmal_fuad_hamzah](https://instagram.com/azmal_fuad_hamzah)
    design:
      columns: '1'
---
