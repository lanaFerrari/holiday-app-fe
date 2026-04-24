# 🏖️ Holiday Tracker

A web-based team absence and holiday tracking system built with React and Vite.

**GitHub Repository:** [https://github.com/lanaFerrari/holiday-app-fe](https://github.com/lanaFerrari/holiday-app-fe)

**Live Demo:** [https://lanaferrari.github.io/holiday-app-fe/](https://lanaferrari.github.io/holiday-app-fe/)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Problem Statement](#problem-statement)
3. [Proposed Solution](#proposed-solution)
4. [User Personas](#user-personas)
5. [Stakeholder Requirements](#stakeholder-requirements)
6. [UX Design & Prototyping](#ux-design--prototyping)
7. [Project Planning](#project-planning)
8. [Technology Stack](#technology-stack)
9. [MVP Build — Step by Step](#mvp-build--step-by-step)
10. [Features](#features)
11. [Testing](#testing)
12. [Accessibility & Usability](#accessibility--usability)
13. [CI/CD Pipeline](#cicd-pipeline)
14. [User Documentation](#user-documentation)
15. [Technical Documentation](#technical-documentation)
16. [Risks & Mitigations](#risks--mitigations)
17. [Future Development](#future-development)

---

## Project Overview

Holiday Tracker is a lightweight, intuitive web-based tool built to replace a manual spreadsheet process used by the DT Product team for tracking team absences and holidays. The system gives every team member instant visibility of who is and is not available on any given day, reducing scheduling conflicts and saving time in team meetings.

The application was proposed as a side project for the DT Product team, where the absence of a centralised tracking system was causing recurring problems. The tool was designed and built as a Minimum Viable Product (MVP), following an agile approach with a focus on simplicity, usability, and daily engagement.

The frontend was built entirely with React and Vite, using mock data to simulate real API responses. The application is deployed to GitHub Pages and is accessible at the live demo link above.

---

## Problem Statement

Within the DT Product team, there is a continuing issue with limited visibility into absences and holidays. The current process relies on a shared spreadsheet that each team member is expected to update manually whenever they plan to take time off. In practice, this process breaks down frequently because team members forget to update the spreadsheet, updates are made inconsistently, and there is no standard format for entries.

The consequences of this are significant. Meetings are regularly booked with people who are not available, wasting time both for the meeting organiser and for the team members who have to re-schedule. Valuable meeting time is consumed at the start of calls confirming who is actually present and whether absent colleagues should have been invited. New team members have no clear way of understanding their colleagues' availability, making it difficult for them to integrate into the team.

The problem is not simply a matter of process discipline. The tool currently in use — a shared spreadsheet — is not designed for this purpose and does not make the information easy to consume. It requires team members to scroll through rows of data, interpret inconsistently formatted entries, and manually calculate whether a colleague is available on a given date. A purpose-built tool, designed around the specific needs of the team, has the potential to solve this problem permanently.

---

## Proposed Solution

The proposed solution is a bespoke web application that centralises absence and holiday tracking in one easy-to-use place. Rather than attempting to replicate the functionality of a full HR system, the tool is focused narrowly on the team's core need: knowing who is available on any given day.

The system supports the following core capabilities:

- **Self-service holiday input** — Team members can log their own planned holidays directly into the system using a simple form that includes a date range picker and holiday type selector.
- **Individual holiday profiles** — Each team member has a dedicated profile page displaying all of their upcoming holidays, their holiday allowance, and a summary of past and active bookings.
- **Daily absence homepage** — The main landing page displays a calendar view of the current month, with avatars showing which team members are off on each day. A side panel updates in real time when a day is selected, showing the full list of people on holiday.
- **Away Today** — A one-click button on each team member's profile instantly logs an absence for the current day, removing friction for unplanned absences such as illness.
- **Calendar navigation** — The calendar can be navigated forwards and backwards by month, giving the team visibility of upcoming absences beyond the current week.

---

## User Personas

Three user personas were developed to guide design and prioritisation decisions throughout the project. These personas are based on real roles within the DT Product team.

### Persona A: Sarah — Team Member

Sarah is a Software Developer on the DT Product team. Her primary goal is to quickly log her upcoming holidays and to check whether her colleagues are available before booking a meeting. Her main pain point is the current spreadsheet, which she finds slow and counterintuitive. She has previously booked meetings only to discover that key people were away. Sarah's expectations are simple: a form she can fill in quickly to add a holiday, and a clear homepage she can glance at each morning before her day begins.

### Persona B: James — Line Manager

James is the DT Product Team Manager. His primary goal is to maintain an up-to-date record of his team's availability, including unplanned absences like illness, without placing a significant administrative burden on himself or his team. His main pain point is that he currently relies entirely on team members to update the spreadsheet, which frequently falls behind reality. He also spends time at the start of meetings confirming attendance rather than focusing on the agenda. James's expectations are that he can quickly log an absence on behalf of a team member when needed, and that the homepage gives him confidence that it reflects the current state of the team.

### Persona C: Emma — New Team Member

Emma recently joined the DT Product team. Her primary goal is to understand who she is working with and when her colleagues are available, so she can integrate smoothly into the team. Her main pain point is that as a new member, she has no existing context about team schedules and finds it difficult to know who to reach out to on any given day. Emma's expectations are that the tool is intuitive enough to use without training, and that it provides clear profiles for each team member so she can get to know the people she is working with.

---

## Stakeholder Requirements

The following requirements were gathered directly from the stakeholder — the DT Product Team Manager — during the initial project scoping meeting. Each requirement was assigned a priority using the MoSCoW method.

| ID | Requirement | Priority |
|----|-------------|----------|
| REQ-01 | Team members can input their own holidays | Must Have |
| REQ-02 | Button to add an instant "Away Today" booking | Must Have |
| REQ-03 | A homepage displays who is absent today | Must Have |
| REQ-04 | Each user has a profile showing their holidays | Must Have |
| REQ-05 | The tool is simple and intuitive to use | Must Have |
| REQ-06 | The tool encourages daily use as a reference point | Must Have |

All six requirements were delivered in the MVP. Requirements REQ-05 and REQ-06 were treated as design constraints throughout the build rather than discrete technical features, informing decisions about layout, navigation, and default state.

---

## UX Design & Prototyping

Before any code was written, the user interface was designed in Figma. This ensured that the layout, navigation, and key interactions were validated at the design stage, reducing the risk of costly changes during development.

The Figma prototype covers the following screens:

- **Homepage / Calendar Dashboard** — The main landing page showing the monthly calendar and the holiday panel
- **Add Holiday Form** — A modal form with team member selection, date range picker, and holiday type buttons
- **Add Team Member Form** — A modal form for registering a new team member with personal details and a profile picture
- **Individual Profile Page** — A full profile view with personal information, holiday allowance progress bar, and a tabbed list of booked holidays

The designs were used as a direct reference during development. Where design decisions were updated during the build — for example, simplifying the holiday type selector — these changes were intentional and reflected feedback from informal usability reviews.

**Figma Prototype:** [View Designs](https://www.figma.com/design/keB6Jvs85i3t9zJhw4hMx2/Holiday-Tracking-System?node-id=0-1&t=yMbpOmk72vggP02E-1)

---

## Project Planning

The project was planned and managed using a Kanban board in Notion, with tasks broken down into epics and individual tickets, each representing a discrete piece of work. The board was used throughout development to track progress, prioritise work, and identify blockers.

**Project Board:** [View Kanban Board](https://www.notion.so/3023bcdff74e8024847dd3eb5f14d098?v=3023bcdff74e80be966a000caeb53920)

The use of a Kanban approach was appropriate for this project because the scope was relatively well understood from the outset, and the work could be broken down into small, independently deliverable units. Kanban is particularly well-suited to solo development projects because it provides visibility of work in progress without the overhead of sprint planning ceremonies associated with Scrum. The board gave a clear view of what was ready to start, what was in progress, and what had been completed, which helped maintain focus and avoid context switching between unrelated tasks.

Each feature was developed on its own dedicated branch, reviewed, and merged into the main branch via a pull request. This branching strategy mirrors the workflow used by professional software engineering teams and provides several practical benefits. It keeps the main branch stable and deployable at all times. It creates a clear record of when each feature was introduced and what changes it involved. It also provides natural checkpoints for reviewing the quality of the code before it is merged, even when working alone.

The five development phases were treated as loose milestones rather than fixed sprints, allowing work to carry over between phases when necessary without disrupting the overall plan. The phased structure helped maintain a logical build order — for example, ensuring that the data model and core calendar view were in place before building the features that depend on them, such as the holiday panel and the profile page.

### Development Phases

| Phase | Description | Duration |
|-------|-------------|----------|
| Phase 1 — Discovery & Design | Stakeholder meetings, user personas, Figma prototypes, project board setup | Week 1–2 |
| Phase 2 — Core MVP Build | Homepage dashboard, holiday input form, CI/CD setup | Week 3–4 |
| Phase 3 — Profile & Features | User profile pages, Away Today function, calendar view | Week 5–7 |
| Phase 4 — Testing & Polish | Accessibility audit, usability testing | Week 8–9 |
| Phase 5 — Documentation | Final README, user guide, technical documentation | Week 10 |

---

## Technology Stack

Each technology in the stack was selected deliberately to suit the requirements of the project, balancing developer familiarity, suitability for the problem, and practical constraints around cost and time.

| Layer | Technology |
|-------|------------|
| Frontend | React + Vite |
| Styling | CSS (vanilla) |
| Date handling | Day.js |
| UI Components | MUI X Date Pickers Pro |
| Testing | Jest + React Testing Library |
| Version Control | GitHub |
| CI/CD | GitHub Actions |
| Deployment | GitHub Pages |

**React and Vite** were chosen for the frontend because React's component-based architecture is well suited to the modular nature of this application. The calendar, the holiday panel, the profile page, and the forms are all self-contained units of UI that can be developed, tested, and maintained independently. Vite was selected over Create React App because of its significantly faster development server startup and build times, which meaningfully improves the development experience during a time-constrained project.

**Vanilla CSS** was used for all styling rather than a framework such as Tailwind or Bootstrap. This decision was taken to keep the project lightweight and to avoid introducing dependencies that would add complexity without providing proportional value for a project of this scale. Each component has its own CSS file, and class names are scoped to avoid conflicts between components.

**Day.js** was chosen for date handling over Moment.js (which is no longer actively maintained and has a significantly larger bundle size) and the native Date API (which requires verbose syntax for common operations). Day.js provides a clean, chainable API and supports the `isBetween` plugin, used extensively to determine whether a date falls within a holiday range.

**MUI X Date Pickers Pro** was selected for the date range calendar component in the holiday form. Building an accessible date range picker from scratch would have required significant development time and specialist accessibility knowledge. The MUI X component provides this out of the box, including keyboard navigation, screen reader support, and touch compatibility.

**Jest and React Testing Library** were used for the testing implementation. Jest is the industry-standard JavaScript testing framework, providing test runners, assertion utilities, and mocking capabilities in a single package. React Testing Library was chosen specifically because it encourages writing tests from the user's perspective. Rather than asserting on internal component state or implementation details, tests are written in terms of what a user would see and interact with. This produces a more reliable test suite that is resilient to refactoring.

**GitHub Actions** was selected for the CI/CD pipeline because of its tight integration with GitHub and the ability to define workflows as code within the repository itself, making the pipeline configuration versioned and reproducible alongside the application code.

---

## MVP Build — Step by Step

This section documents the step-by-step process followed to build the MVP, including the key decisions made at each stage.

### Step 1 — Project Initialisation

The project was initialised using Vite with the React template. Vite was chosen over Create React App because of its significantly faster development server and build times. The project was immediately pushed to GitHub and a `main` branch protection rule was put in place to enforce pull requests from the start of development.

```bash
npm create vite@latest holiday-app-fe --template react
cd holiday-app-fe
npm install
```

### Step 2 — Folder Structure

Before writing any component code, a deliberate folder structure was established to keep the project organised as it grew. The structure groups files by feature rather than by type, which makes it easier to locate and modify related code.

```
src/
├── components/
│   ├── Calendar/
│   │   └── CalendarView.jsx
│   ├── Holiday/
│   │   └── HolidayPanel.jsx
│   ├── Person/
│   │   └── PersonProfile.jsx
│   └── Forms/
│       ├── HolidayForm.jsx
│       └── PersonForm.jsx
├── data/
│   └── mockData.js
├── App.jsx
└── main.jsx
```

### Step 3 — Mock Data

Because the backend was out of scope for the MVP, a mock data file was created to simulate the responses that would eventually come from a real API. This allowed the frontend to be built and tested without any dependency on a backend service. The mock data includes people, holiday types, and holiday bookings covering April through September 2026, with overlapping date ranges to ensure that every day has at least one person on holiday.

### Step 4 — Calendar View

The calendar was built as a custom component using Day.js for all date calculations. The component calculates the first and last days of the current month, then extends the range to fill complete weeks — including trailing days from the previous month and leading days from the next month. Each day cell renders the date number and a row of avatar icons representing people on holiday that day. The calendar supports month navigation using previous and next buttons, and highlights the currently selected day.

### Step 5 — Holiday Panel

The holiday panel sits alongside the calendar and displays the full list of people on holiday on the selected day. It updates reactively when the user clicks a different day on the calendar. The selected day state is managed in the root `App.jsx` component and passed down as props, ensuring that the calendar and the panel always reflect the same selected day. Clicking on a person's name in the panel navigates to their profile page.

### Step 6 — Add Holiday Form

The holiday form is rendered as a modal overlay. It uses the MUI X `DateRangeCalendar` component for date selection, which provides a polished and accessible calendar UI without requiring custom implementation. The form validates that all required fields are completed before submission, and pre-selects the team member when opened from a profile page. Holiday type is selected using coloured buttons that match the colours defined in the mock data.

### Step 7 — Add Person Form

The person form allows a new team member to be registered with their name, email address, phone number, job role, and department. It also includes a profile picture upload using a file input. When a new person is added, the application navigates directly to their profile page, giving immediate confirmation that the record has been created successfully.

### Step 8 — Person Profile Page

The profile page is a full-page view showing all available information for a team member. It includes their personal details, a holiday allowance section with a progress bar showing days used versus remaining, and a tabbed list of booked holidays filtered by All, Upcoming, and Past. Each holiday card shows the status (Active, Upcoming, or Completed), the holiday type with its associated colour, the date range, and the number of days. The page also includes an Away Today button and an Add Holiday button that opens the holiday form pre-populated with that person's details.

### Step 9 — CI/CD Pipeline

GitHub Actions workflows were added to automate build verification and deployment. The CI workflow runs on every push and pull request to the main branch, ensuring that the build does not break before code is merged. The deploy workflow runs on every push to main and publishes the built application to GitHub Pages automatically.

### Step 10 — Deployment

The application was deployed to GitHub Pages using the `peaceiris/actions-gh-pages` action. The Vite configuration was updated to set the correct base path for the repository, ensuring that all assets load correctly when served from the GitHub Pages subdirectory.

---

## Features

- Monthly calendar view with previous and next month navigation
- Holiday panel showing who is off on any selected day, updating on click
- Add Holiday form with date range picker, team member selection, and holiday type
- Add Team Member form with profile picture upload
- Individual profile pages with personal details and holiday history
- Holiday allowance tracker with progress bar
- Away Today — one-click to log an absence for the current day
- All, Upcoming, and Past tabs on the profile holiday list
- Status badges on holiday cards showing Active, Upcoming, or Completed
- Colour-coded holiday type badges matching the form selector colours
- Navigation from holiday panel and calendar avatars directly to profile pages

---

## Testing

Testing was implemented using **Jest** and **React Testing Library**, following a Test Driven Development approach for the core application logic. TDD involves writing a failing test before writing the implementation code, then writing the minimum code necessary to make the test pass, and then refactoring. This red-green-refactor cycle encourages smaller, more focused functions and produces a test suite that genuinely reflects the intended behaviour of the application rather than simply verifying that code exists.

Applying TDD to a React application requires a degree of discipline, particularly when working with components that have complex interactions or depend on external libraries. In this project, TDD was applied primarily to the data filtering logic — the functions responsible for determining which holidays fall on a given day, and which status to assign to a holiday based on its date range relative to today. These functions are pure and deterministic, making them well-suited to TDD. Component-level tests were written after the component structure was established, focusing on verifying that the correct output is rendered for given inputs.

React Testing Library was chosen over Enzyme because it encourages testing from the user's perspective — asserting on what is visible on screen rather than on internal component state or implementation details. This produces tests that are more resilient to refactoring and more meaningful as documentation of expected behaviour.

### Running Tests

```bash
npm run test
```

### Test Coverage

| Test File | Description |
|-----------|-------------|
| `mockData.test.js` | Validates that the mock data exports are correctly structured, that every holiday references a valid person, and that all date strings are valid ISO format dates |
| `CalendarView.test.jsx` | Tests that the calendar renders the correct month heading, that the correct number of day cells are rendered, and that the navigation buttons update the displayed month |
| `HolidayPanel.test.jsx` | Tests that the correct people appear in the panel for a given selected day, and that the panel displays the correct message when no one is on holiday |

---

## Accessibility & Usability

Accessibility was treated as a first-class concern throughout the build rather than an afterthought. The following considerations were applied systematically during development.

**Semantic HTML** was used throughout the application. The page header uses a `<header>` element, the main content area uses `<main>`, lists of people use `<ul>` and `<li>`, and forms use proper `<label>` elements associated with their inputs via `htmlFor`. Using semantic HTML means that screen readers and assistive technologies can interpret the structure of the page correctly without relying on visual styling alone. It also provides meaningful structure to search engines and other automated tools that consume the page.

**Alt text** was applied to all images, including profile pictures and the application logo. Where images are purely decorative, empty alt attributes are used to signal to screen readers that the image can be skipped, preventing unnecessary noise for users navigating by audio.

**Colour contrast** was reviewed against the WCAG 2.1 AA standard, which requires a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text. The primary blue used for buttons and interactive elements was verified to meet this standard against both white and dark backgrounds. The holiday type colours used in badges were also reviewed to ensure that the white text labels on coloured backgrounds meet the minimum contrast requirement.

**Keyboard navigation** is supported for all interactive elements including buttons, form inputs, and the date range calendar. The MUI X component library provides built-in keyboard support for the date picker, including arrow key navigation within the calendar grid, Enter to select a date, and Escape to close the calendar. All custom buttons and interactive elements are implemented using native HTML button elements, which receive keyboard focus by default and respond to both mouse clicks and keyboard activation.

**Form labels** are explicitly associated with their corresponding inputs using the `htmlFor` attribute on `<label>` elements and matching `id` attributes on inputs. This ensures that screen readers announce the correct label when a form field receives focus, and that clicking a label focuses the corresponding input, which improves usability for motor-impaired users who may find small input targets difficult to click accurately.

### Usability Evaluation

The application was evaluated against each of the original stakeholder requirements to confirm that the MVP meets its goals.

| Requirement | Status | Notes |
|-------------|--------|-------|
| REQ-01: Team members can input holidays | Implemented | Add Holiday form accessible from header and profile page |
| REQ-02: Away Today button | Implemented | Available on every profile page |
| REQ-03: Homepage shows today's absences | Implemented | Holiday panel defaults to today on load |
| REQ-04: User profile with holidays | Implemented | Full profile page with tabbed holiday history |
| REQ-05: Simple and intuitive | Validated | Minimal navigation, clear labels, no training required |
| REQ-06: Encourages daily use | Validated | Homepage defaults to today; calendar provides daily reference point |

---

## CI/CD Pipeline

Continuous Integration and Continuous Deployment (CI/CD) is a software engineering practice that automates the process of verifying and deploying code changes. A CI/CD pipeline runs builds and deployments automatically on every push, catching silent breakages — such as those caused by differences in Node.js versions or incompatible dependency versions — immediately rather than after merging, and ensuring the live site always reflects the latest state of the main branch.

The project uses **GitHub Actions** to implement both CI and CD as separate workflows defined in the `.github/workflows` directory. Separating the two workflows is a deliberate design decision. The CI workflow runs on all branches to catch breakages early, while the deploy workflow runs only on the main branch to ensure that only reviewed and approved code is published to the live site.

### CI Workflow

The CI workflow is defined in `ci.yml` and is triggered on every push to any branch and on every pull request targeting the main branch. Its purpose is to verify that the code builds successfully before it is merged. If the build fails, the pull request is blocked from merging, preventing broken code from entering the main branch.

The workflow steps are:
1. Check out the repository code
2. Set up Node.js version 20
3. Install project dependencies using `npm install`
4. Run the production build using `npm run build`

### Deploy Workflow

The deploy workflow is defined in `deploy.yml` and is triggered only on pushes to the main branch. Its purpose is to build the application and publish the output to GitHub Pages automatically. This means that every time a pull request is merged into main, the live site is updated within minutes without any manual intervention. The workflow uses the `peaceiris/actions-gh-pages` action to push the built output to the `gh-pages` branch, which GitHub Pages is configured to serve.

The workflow steps are:
1. Check out the repository code
2. Set up Node.js version 20
3. Install project dependencies
4. Run the production build
5. Deploy the contents of the `dist` folder to the `gh-pages` branch

### Branch Protection

The main branch is protected with the following rules to enforce code quality and prevent accidental breakage. Pull requests are required before any code can be merged into main, ensuring that every change is reviewed before it reaches production. The CI build check must pass before a pull request can be merged, ensuring that broken builds cannot enter the main branch even if a reviewer approves them. Force pushes to the main branch are blocked, preventing history rewrites that could cause confusion or data loss. Together, these rules implement a workflow that is consistent with professional engineering team standards.

---

## User Documentation

### How to Add a Holiday

1. Click **+ Add Holiday** in the top right corner of the page
2. Select a team member from the dropdown list
3. Use the calendar to select a start date and an end date for the holiday
4. Alternatively, type the dates directly into the start and end date fields
5. Select a holiday type by clicking one of the coloured type buttons
6. Click **+ Add Holiday** to confirm and save the booking

### How to Add a Team Member

1. Click **+ Add Person** in the top right corner of the page
2. Enter the team member's full name, email address, phone number, job role, and department
3. Optionally upload a profile picture by clicking the camera icon
4. Click **+ Add Member** to confirm

### How to Use Away Today

1. Navigate to the team member's profile page by clicking their name or avatar
2. Click the **+ Away Today** button to instantly log an absence for the current day
3. The absence will appear immediately in the calendar and holiday panel

### How to View a Team Member's Profile

1. Click on any person's avatar or name in the holiday panel on the left side of the homepage
2. The profile page displays their personal details, holiday allowance, and a full list of their booked holidays
3. Use the All, Upcoming, and Past tabs to filter the holiday list
4. Click the back button in the header to return to the homepage

### How to Navigate the Calendar

1. Use the **<** button to go back to the previous month
2. Use the **>** button to go forward to the next month
3. Click on any day to update the holiday panel on the left with the people off on that day

---

## Technical Documentation

### Prerequisites

- Node.js version 20 or higher
- npm

### Installation

```bash
git clone https://github.com/lanaFerrari/holiday-app-fe.git
cd holiday-app-fe
npm install
npm run dev
```

The development server will start at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

The production build output is written to the `dist` folder.

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18 | UI framework |
| dayjs | ^1.11 | Date manipulation and formatting |
| dayjs/plugin/isBetween | included | Plugin for date range checks |
| @mui/x-date-pickers-pro | ^8 | Date range calendar component |
| @mui/material | ^5 | MUI base components |
| @emotion/react | ^11 | Required peer dependency for MUI |
| @emotion/styled | ^11 | Required peer dependency for MUI |

### Data Model

The frontend uses mock data structured to match the shape of the planned backend API.

```js
// Person
{
  id: number,
  name: string,
  jobTitle: string,
  email: string,
  phone: string,
  department: string,
  photo: string (URL)
}

// Holiday
{
  id: number,
  personId: number,
  startDate: string (YYYY-MM-DD),
  endDate: string (YYYY-MM-DD),
  type: string (holiday type id)
}

// Holiday Type
{
  id: string,
  label: string,
  color: string (hex)
}
```

### Component Architecture

| Component | Responsibility |
|-----------|---------------|
| `App.jsx` | Root component. Manages global state for people, holidays, selected day, and navigation. Conditionally renders the profile page or the main dashboard. |
| `CalendarView.jsx` | Monthly calendar grid. Calculates days to display, renders day cells with holiday avatars, handles day selection and month navigation. |
| `HolidayPanel.jsx` | Sidebar panel. Filters holidays for the selected day, displays person details and holiday dates, handles navigation to profile pages. |
| `PersonProfile.jsx` | Full profile page. Displays personal information, holiday allowance with progress bar, tabbed holiday list with status badges. |
| `HolidayForm.jsx` | Modal form for adding holidays. Manages date range state, validates inputs, supports pre-selection of a team member. |
| `PersonForm.jsx` | Modal form for adding team members. Handles profile picture upload and preview. |

---

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Scope creep from stakeholder requests | Medium | High | MoSCoW prioritisation applied from the start; non-essential features explicitly documented as out of scope for the MVP and deferred to future phases |
| Low adoption if the tool feels complex | Medium | High | Simplicity prioritised throughout UX design; the homepage defaults to the current day so there is immediate value with no setup required |
| Limited testing time leading to bugs in production | Medium | Medium | TDD approach adopted from the start for core logic; CI pipeline blocks broken builds from reaching production |
| Data loss due to frontend-only implementation | High | Low | Acknowledged as a known limitation of the MVP; mock data resets on page refresh; backend integration is the highest priority for the next phase |

---

## Future Development

The following features are planned for future phases of the project, once a backend API and database have been implemented.

The highest priority is a backend API built with C# and ASP.NET Core, paired with a PostgreSQL database for persistent data storage. The current MVP stores all data in memory, so holidays and team members added during a session are lost on page refresh. The data model has been designed with this transition in mind, mapping cleanly to a relational schema. User authentication will follow, enabling holidays to be associated with the logged-in user automatically. Further planned features include Google Calendar and Outlook integration, a holiday approval workflow, and automated email notifications.

- Backend API with C# and ASP.NET Core
- PostgreSQL database for persistent data storage
- User authentication and login
- Google Calendar and Outlook integration
- Holiday approval workflows
- HR system integration
- Future FE improvements and new features as per proposed design

---

## License

MIT
