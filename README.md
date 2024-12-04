# Web-based documents template

Build, push and deploy your documents fast and easy with this template.

## About the project

A simple website template built for publishing project documentation on website. It aim to help open-source contributors to build their documentation and publish it on website fast and easy.

Using this template allow you to build your documentation in markdown and publish it on website, and host it on GitHub Pages or any other static website hosting service.

## How it works

By structuring documentation in markdown files, anyone can write document with little knowing HTML, CSS or JavaScript. The template will convert markdown files to HTML files and build a website from it. It also use folder for routing, so you can create a folder and put markdown files in it to create a new page (currently work on Vercel only).

*Note: If you view this on website, the content is in sync with the `README.md` file in the repository, so you can edit the `README.md` file to update the content on the website.*

## Getting started

1. Fork this repository
2. Edit & publish your documentation
3. Deploy your website (by pushing to GitHub or Vercel)

## Edit & publish your documentation

1. **Edit markdown files in `documents` folder**
    - Create a new folder for a new page by copy the `base-template` folder in the `assets/documents` folder
    - Import `index.html` & `content.md` into the newly-created folder
    - Edit `content.md` to write your documentation
2. **Push your document and show it on website**
    - To this step, your document should be live on website, but it not show on the sidebar yet.
    - Edit the `sidebar.js` file to add your document to the sidebar
    - Push your changes to GitHub or Vercel to see the changes
3. **Deploy your website**
    - This template currently support for Vercel hosting because this template use folder for routing
    - Push your changes to Vercel to deploy your website or connect Verce to your GitHub repository to deploy automatically

## UI Configuration

To change typography, color, spacing, etc. you can edit the `document-style.css` file in the `assets` folder. Currently, in out template we have only style typography spacing and and padding. You can add more style to the file to customize your website.