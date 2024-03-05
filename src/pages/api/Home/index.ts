import { useEffect, useState } from "react";

import { cardType } from "@CardCraft/types/card";
import { useAppDispatch } from "@CardCraft/app/hooks";
import { add } from "@CardCraft/features/query/querySlice";
import { show } from "@CardCraft/features/toast/toastSlice";

import useFetchAPI, { engine } from "@CardCraft/pages/api/engine";

const useHome = () => {
  const dispatch = useAppDispatch();

  const { callback } = useFetchAPI("/cards", "GET");

  const [rows, setRows] = useState<null | cardType[]>(null);

  const [term, setTerm] = useState("");

  const deleteCard = (id: number | string) => {
    engine({
      url: "/cards/" + id,
      method: "GET",
    })
      .then((res) => {
        dispatch(
          add({
            cardId: res.data.id,
            previousValues: res.data,
            action: "DELETE",
          })
        );
      })
      .catch(console.error);
    engine
      .delete("/cards/" + id)
      .then(() => {
        callback().then(setRows);
        dispatch(show(`Card #${id} deleted!`));
      })
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
