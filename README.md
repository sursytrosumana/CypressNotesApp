**Cypress test for the Automation Notes App**

This repo contains a complete end-to-end test suite built with Cypress designed to test the Automation Notes App

**Link:** https://practice.expandtesting.com/notes/app

It covers everything from signup and login flows to profile updates, note creation, category filtering, and even search functionality. 
All tests follow the POM(Page Object Model) pattern for maintainability and clarity.

**Here's how the repo is structured:**
cypress/
├── e2e/
│ ├── smoke/ # Core flows (signup, login)
│ └── regression/ # Deeper tests (notes, search, etc.)
├── support/
│ ├── page_objects/ # POM classes (LoginPage, NotesPage, etc.)
│ └── testData.js # Central test data (with dynamic generation)
├── reports/ # HTML test reports
├── screenshots/ # Failure screenshots (optional)

**Setup Instructions**

**To get started:**

1. Clone this repo
2. Install dependencies: "npm install"
3. To run the code: Open terminal at the project source and: Enter: "npx cypress open"
4. To run all tests and generate a single, clean HTML report: "npm run report" 

