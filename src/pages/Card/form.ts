import { cardKeys } from "@CardCraft/types/card";

export const FormItems = [
  {
    label: "Name",
    inputs: [
      {
        name: "nameOfHolder" as cardKeys,
        width: "150px",
        placeHolder: "Full Name",
      },
    ],
  },
  {
    label: "Card N.",
    inputs: [
      {
        name: "card" as cardKeys,
        width: "250px",
        placeHolder: "16 digits",
      },
    ],
  },
  {
    label: "IBAN",
    inputs: [
      {
        name: "IBAN" as cardKeys,
        width: "270px",
        placeHolder: "22 digit",
      },
    ],
  },
  {
    label: "Account N.",
    inputs: [
      {
        name: "account" as cardKeys,
        width: "210px",
        placeHolder: "13 digit",
      },
    ],
  },
  {
    label: "Exp. Date",
    inputs: [
      {
        name: "expireYear" as cardKeys,
        width: "60px",
        placeHolder: "YY",
      },
      {
        name: "expireMonth" as cardKeys,
        width: "60px",
        placeHolder: "MM",
      },
    ],
  },
  {
    label: "Description",
    inputs: [
      {
        name: "description" as cardKeys,
        width: "320px",
        placeHolder: "type...",
      },
    ],
  },
];
