import { useEffect, useState } from "react";

import { cardType } from "@CardCraft/types/card";

import useFetchAPI, { engine } from "../engine";

const useHome = () => {
  const { callback } = useFetchAPI("/cards", "GET");

  const [rows, setRows] = useState<null | cardType[]>(null);

  const [term, setTerm] = useState("");

  const deleteCard = (id: number) => {
    engine
      .delete("/cards/" + id)
      .then(() => callback().then(setRows))
      .catch((err) => console.error(err));
  };

  const searchCard = () => {
    if (term.length > 0)
      return (
        rows?.filter(
          (item) =>
            new RegExp(term, "ig").test(item.nameOfHolder) ||
            item.account.includes(term)
        ) ?? []
      );
    else return rows;
  };

  useEffect(() => {
    callback().then(setRows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: searchCard() ?? null,
    deleteCard,
    term,
    setTerm,
  };
};

export default useHome;
