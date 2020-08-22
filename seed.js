require("./Config/db");

const Student = require("./Models/Student");

const data = [
  {
    name: "Dolley",
    rollno: 355782655,
    dept: "civil",
    password: "posuere",
  },
  {
    name: "Ignatius",
    rollno: 656083441,
    dept: "civil",
    password: "pede",
  },
  {
    name: "Gauthier",
    rollno: 377844323,
    dept: "prod",
    password: "metus",
  },
  {
    name: "Lurline",
    rollno: 919261521,
    password: "ut",
  },
  {
    name: "Marie-jeanne",
    rollno: 211419078,
    password: "non",
  },
  {
    name: "Ester",
    rollno: 365651473,
    dept: "mme",
    password: "praesent",
  },
  {
    name: "Sampson",
    rollno: 878517675,
    dept: "prod",
    password: "lectus",
  },
  {
    name: "Derek",
    rollno: 263277293,
    dept: "prod",
    password: "bibendum",
  },
  {
    name: "Tabbatha",
    rollno: 792620884,
    dept: "prod",
    password: "ultrices",
  },
  {
    name: "Morey",
    rollno: 580256430,
    dept: "ice",
    password: "vel",
  },
  {
    name: "Jorie",
    rollno: 619266129,
    dept: "cse",
    password: "diam",
  },
  {
    name: "Branden",
    rollno: 817966875,
    dept: "eee",
    password: "nisi",
  },
  {
    name: "Jewel",
    rollno: 217405205,
    dept: "ece",
    password: "est",
  },
  {
    name: "Cynthy",
    rollno: 467290270,
    dept: "ece",
    password: "praesent",
  },
  {
    name: "Janka",
    rollno: 506162985,
    dept: "mme",
    password: "id",
  },
  {
    name: "Sheela",
    rollno: 199845957,
    dept: "chem",
    password: "et",
  },
  {
    name: "Renelle",
    rollno: 348467639,
    dept: "me",
    password: "amet",
  },
  {
    name: "Parsifal",
    rollno: 420097215,
    dept: "chem",
    password: "at",
  },
  {
    name: "Mireille",
    rollno: 831553493,
    dept: "ece",
    password: "quam",
  },
  {
    name: "Blythe",
    rollno: 988674585,
    dept: "civil",
    password: "eget",
  },
  {
    name: "Raychel",
    rollno: 139373069,
    dept: "me",
    password: "condimentum",
  },
  {
    name: "Codi",
    rollno: 911558960,
    dept: "ece",
    password: "eleifend",
  },
  {
    name: "Nealson",
    rollno: 946440582,
    dept: "civil",
    password: "curae",
  },
  {
    name: "Ted",
    rollno: 232601543,
    dept: "cse",
    password: "velit",
  },
  {
    name: "Livvy",
    rollno: 906370492,
    dept: "ice",
    password: "quis",
  },
  {
    name: "Randolf",
    rollno: 586830880,
    dept: "cse",
    password: "est",
  },
  {
    name: "Tod",
    rollno: 877879354,
    dept: "chem",
    password: "varius",
  },
  {
    name: "Florette",
    rollno: 826073247,
    dept: "eee",
    password: "luctus",
  },
  {
    name: "Suzie",
    rollno: 484943855,
    dept: "civil",
    password: "duis",
  },
  {
    name: "Jedediah",
    rollno: 174605514,
    dept: "eee",
    password: "morbi",
  },
];

data.forEach(async (d) => {
  await Student.create(d);
});
