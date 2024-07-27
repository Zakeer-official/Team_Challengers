import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "zakeer",
    email: "zakeer@gmail.com",
    age: 21,
    phone: "121-5454",
    access: "developer",
  },
  {
    id: 2,
    name: "althaf",
    email: "althaf@gmail.com",
    age: 21,
    phone: "314-2288",
    access: "developer",
  },
  {
    id: 3,
    name: "jayanth",
    email: "jayanth@gmail.com",
    age: 20,
    phone: "982-6739",
    access: "developer",
  }
];

export const mockDataContacts = [
  {
    id: 1,
    name: "zakeer",
    email: "zakeer@gmail.com",
    age: 21,
    phone: "121-5454",
    address: "abc Street, Indore, MP",
    city: "Indore",
    zipCode: "45545",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "althaf",
    email: "althaf@gmail.com",
    age: 21,
    phone: "314-2288",
    address: "abc Street, Indore, MP",
    city: "Indore",
    zipCode: "45545",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "jayanth",
    email: "jayanth@gmail.com",
    age: 20,
    phone: "(422)982-6739",
    address: "abc Street, Indore, MP",
    city: "Indore",
    zipCode: "45545",
    registrarId: 4132513,
  }
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "zakeer",
    email: "zakeer@gmail.com",
    cost: "21.24",
    phone: "121-5454",
    date: "26/07/2024",
  },
  {
    id: 2,
    name: "althaf",
    email: "althaf@gmail.com",
    cost: "1.24",
    phone: "314-2288",
    date: "26/07/2024",
  },
  {
    id: 3,
    name: "jayanth",
    email: "jayanth@gmail.com",
    cost: "11.24",
    phone: "982-6739",
    date: "26/07/2024",
  }
];

export const mockTransactions = [
  {
    user: "Name",
    date: "Water Usage",
    cost: "Inflow",
  },
  {
    user: "Bilawali",
    date: "5000 Litres",
    cost: "Inflow",
  },
  {
    user: "	Deoguradia",
    date: "7000 Litres",
    cost: "Inflow",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Rural",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "January",
        y: 101,
      },
      {
        x: "February",
        y: 75,
      },
      {
        x: "March",
        y: 36,
      },
      {
        x: "April",
        y: 216,
      },
      {
        x: "May",
        y: 35,
      },
      {
        x: "June",
        y: 236,
      },
      {
        x: "July",
        y: 88,
      },
      {
        x: "August",
        y: 232,
      },
      {
        x: "September",
        y: 281,
      },
      {
        x: "October",
        y: 1,
      },
      {
        x: "November",
        y: 35,
      },
      {
        x: "December",
        y: 14,
      },
    ],
  },
  {
    id: "Urban",
    color: tokens("dark").redAccent[500],
    data: [
      {
        x: "January",
        y: 101,
      },
      {
        x: "February",
        y: 705,
      },
      {
        x: "March",
        y: 36,
      },
      {
        x: "April",
        y: 216,
      },
      {
        x: "May",
        y: 35,
      },
      {
        x: "June",
        y: 236,
      },
      {
        x: "July",
        y: 88,
      },
      {
        x: "August",
        y: 232,
      },
      {
        x: "September",
        y: 281,
      },
      {
        x: "October",
        y: 1,
      },
      {
        x: "November",
        y: 35,
      },
      {
        x: "December",
        y: 14,
      },
    ],
  },
];

// src/data/indoreData.js
// src/data/indoreData.js
// src/data/madhyaPradeshData.js
export const madhyaPradeshData = [
  {
    id: "BHOPAL",
    name: "Bhopal",
    value: 500000, // Example value
  },
  {
    id: "INDORE",
    name: "Indore",
    value: 600000, // Example value
  },
  // Add more districts or cities data here
];



