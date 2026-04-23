export const people = [
  {
    id: 1,
    name: "Alice Lima",
    jobTitle: "Frontend Developer",
    email: "alice@company.com",
    phone: "+1 (555) 000-0001",
    department: "Engineering",
    photo:
      "https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    jobTitle: "Designer",
    email: "bob@company.com",
    phone: "+1 (555) 000-0002",
    department: "Design",
    photo:
      "https://media.easy-peasy.ai/4e600a82-8aac-4abb-95cd-f87cc9125a0f/18ea5802-d34e-4fbb-91e2-99baebb2eac9_medium.webp",
  },
  {
    id: 3,
    name: "Carol Day",
    jobTitle: "Product Manager",
    email: "carol@company.com",
    phone: "+1 (555) 000-0003",
    department: "Product",
    photo:
      "https://t3.ftcdn.net/jpg/06/07/84/82/360_F_607848231_w5iFN4tMmtI2woJjMh7Q8mGvgARnzHgQ.jpg",
  },
  {
    id: 4,
    name: "David Platten",
    jobTitle: "Backend Developer",
    email: "david@company.com",
    phone: "+1 (555) 000-0004",
    department: "Engineering",
    photo:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
];

export const holidayTypes = [
  { id: "holiday", label: "Holiday", color: "#1976d2" },
  { id: "family_day", label: "Family Day", color: "#9c27b0" },
  { id: "sick", label: "Sick", color: "#ff9800" },
  { id: "night", label: "Night", color: "#212121" },
  { id: "at_lodge", label: "At Lodge", color: "#f44336" },
];

export const holidays = [
  // April 2026
  {
    id: 1,
    personId: 1,
    startDate: "2026-04-01",
    endDate: "2026-04-08",
    type: "holiday",
  },
  {
    id: 2,
    personId: 2,
    startDate: "2026-04-05",
    endDate: "2026-04-12",
    type: "family_day",
  },
  {
    id: 3,
    personId: 3,
    startDate: "2026-04-10",
    endDate: "2026-04-17",
    type: "holiday",
  },
  {
    id: 4,
    personId: 4,
    startDate: "2026-04-15",
    endDate: "2026-04-22",
    type: "sick",
  },
  {
    id: 5,
    personId: 1,
    startDate: "2026-04-20",
    endDate: "2026-04-27",
    type: "at_lodge",
  },
  {
    id: 6,
    personId: 2,
    startDate: "2026-04-25",
    endDate: "2026-04-30",
    type: "holiday",
  },

  // May 2026
  {
    id: 7,
    personId: 3,
    startDate: "2026-05-01",
    endDate: "2026-05-08",
    type: "night",
  },
  {
    id: 8,
    personId: 4,
    startDate: "2026-05-05",
    endDate: "2026-05-12",
    type: "holiday",
  },
  {
    id: 9,
    personId: 1,
    startDate: "2026-05-10",
    endDate: "2026-05-17",
    type: "family_day",
  },
  {
    id: 10,
    personId: 2,
    startDate: "2026-05-15",
    endDate: "2026-05-22",
    type: "holiday",
  },
  {
    id: 11,
    personId: 3,
    startDate: "2026-05-20",
    endDate: "2026-05-27",
    type: "sick",
  },
  {
    id: 12,
    personId: 4,
    startDate: "2026-05-25",
    endDate: "2026-05-31",
    type: "at_lodge",
  },

  // June 2026
  {
    id: 13,
    personId: 1,
    startDate: "2026-06-01",
    endDate: "2026-06-08",
    type: "holiday",
  },
  {
    id: 14,
    personId: 2,
    startDate: "2026-06-05",
    endDate: "2026-06-12",
    type: "night",
  },
  {
    id: 15,
    personId: 3,
    startDate: "2026-06-10",
    endDate: "2026-06-17",
    type: "holiday",
  },
  {
    id: 16,
    personId: 4,
    startDate: "2026-06-15",
    endDate: "2026-06-22",
    type: "family_day",
  },
  {
    id: 17,
    personId: 1,
    startDate: "2026-06-20",
    endDate: "2026-06-27",
    type: "sick",
  },
  {
    id: 18,
    personId: 2,
    startDate: "2026-06-25",
    endDate: "2026-06-30",
    type: "holiday",
  },

  // July 2026
  {
    id: 19,
    personId: 3,
    startDate: "2026-07-01",
    endDate: "2026-07-08",
    type: "at_lodge",
  },
  {
    id: 20,
    personId: 4,
    startDate: "2026-07-05",
    endDate: "2026-07-12",
    type: "holiday",
  },
  {
    id: 21,
    personId: 1,
    startDate: "2026-07-10",
    endDate: "2026-07-17",
    type: "family_day",
  },
  {
    id: 22,
    personId: 2,
    startDate: "2026-07-15",
    endDate: "2026-07-22",
    type: "holiday",
  },
  {
    id: 23,
    personId: 3,
    startDate: "2026-07-20",
    endDate: "2026-07-27",
    type: "night",
  },
  {
    id: 24,
    personId: 4,
    startDate: "2026-07-25",
    endDate: "2026-07-31",
    type: "sick",
  },

  // August 2026
  {
    id: 25,
    personId: 1,
    startDate: "2026-08-01",
    endDate: "2026-08-08",
    type: "holiday",
  },
  {
    id: 26,
    personId: 2,
    startDate: "2026-08-05",
    endDate: "2026-08-12",
    type: "at_lodge",
  },
  {
    id: 27,
    personId: 3,
    startDate: "2026-08-10",
    endDate: "2026-08-17",
    type: "holiday",
  },
  {
    id: 28,
    personId: 4,
    startDate: "2026-08-15",
    endDate: "2026-08-22",
    type: "family_day",
  },
  {
    id: 29,
    personId: 1,
    startDate: "2026-08-20",
    endDate: "2026-08-27",
    type: "sick",
  },
  {
    id: 30,
    personId: 2,
    startDate: "2026-08-25",
    endDate: "2026-08-31",
    type: "holiday",
  },

  // September 2026
  {
    id: 31,
    personId: 3,
    startDate: "2026-09-01",
    endDate: "2026-09-08",
    type: "night",
  },
  {
    id: 32,
    personId: 4,
    startDate: "2026-09-05",
    endDate: "2026-09-12",
    type: "holiday",
  },
  {
    id: 33,
    personId: 1,
    startDate: "2026-09-10",
    endDate: "2026-09-17",
    type: "family_day",
  },
  {
    id: 34,
    personId: 2,
    startDate: "2026-09-15",
    endDate: "2026-09-22",
    type: "holiday",
  },
  {
    id: 35,
    personId: 3,
    startDate: "2026-09-20",
    endDate: "2026-09-27",
    type: "at_lodge",
  },
  {
    id: 36,
    personId: 4,
    startDate: "2026-09-25",
    endDate: "2026-09-30",
    type: "holiday",
  },
];
