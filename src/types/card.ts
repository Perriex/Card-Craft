export type cardType = {
  id?: number | string;
  nameOfHolder: string;
  card: string;
  IBAN: string;
  account: string;
  expireMonth: number | string;
  expireYear: number | string;
  status: boolean;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export type cardKeys =
  | "id"
  | "nameOfHolder"
  | "card"
  | "IBAN"
  | "account"
  | "status"
  | "expireMonth"
  | "expireYear"
  | "description"
  | "createdAt"
  | "updatedAt";
