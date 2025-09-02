RecruitShell

A simple shell website built with Next.js and Ant Design.
This project demonstrates a clean, minimalist structure with placeholder pages for Home, Community, AI, and Contact.

Live Demo

https://recruitshell.vercel.app

(Alternatively, you can clone the repo and run it locally.)

Getting Started

Clone the repo and install dependencies:

git clone https://github.com/your-username/recruitshell.git

cd recruitshell
npm install

Run the development server:

npm run dev

Then open http://localhost:3000
 in your browser.

Project Structure

app/
page.tsx - Home
community/page.tsx - Community preview
ai/page.tsx - AI preview
contact/page.tsx - Contact form

components/
header.tsx - Shared site header

styles/ - CSS Modules

Design Choices

Minimalist aesthetic: white background, restrained color, responsive typography

Scoped styling: CSS Modules keep styles isolated and predictable

Reusable UI: Ant Design components for layout, forms, and cards

Future previews: Community and AI pages include static mockups of functionality to show how the product could evolve

Next Steps (if live)

Add authentication and broker profiles to the Community hub

Expand the AI section into interactive candidate matching and outreach support

Connect the Contact form to a CRM or scheduling tool (HubSpot, Calendly)