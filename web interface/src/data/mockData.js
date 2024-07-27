import { colors } from "@mui/material";
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
  // Example data structure for water leakage
  {
    year: "2020",
    unit1: 12,
    unit2: 19,
    unit3: 8,
    unit4: 22,
  },
  {
    year: "2021",
    unit1: 15,
    unit2: 23,
    unit3: 10,
    unit4: 26,
  },
  {
    year: "2022",
    unit1: 15,
    unit2: 23,
    unit3: 10,
    unit4: 26,
  },
  {
    year: "2023",
    unit1: 15,
    unit2: 23,
    unit3: 10,
    unit4: 26,
  },
  // more data here
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
    color: colors.grey[100],
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: colors.grey[100],
  },
];

export const mockLineData = [
  {
    id: "Leakage",
    color: tokens("dark").redAccent[500],
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
    id: "Consumption",
    color: tokens("dark").greenAccent[500],
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



