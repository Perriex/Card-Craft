import { useAppDispatch, useAppSelector } from "@CardCraft/app/hooks";

import { getLastModifiedCard } from "@CardCraft/features/query/querySelector";
import { remove } from "@CardCraft/features/query/querySlice";
import { show } from "@CardCraft/features/toast/toastSlice";

import { engine } from "@CardCraft/pages/api/engine";

export const useDelete = () => {
  const query = useAppSelector(getLastModifiedCard);

  const dispatch = useAppDispatch();

  function undoDeletedCard() {
    dispatch(remove());
    engine({
      url: "/cards",
      method: "POST",
      data: query.previousValues,
    })
      .then(() => {
        dispatch(show(`Card #${query.cardId} restored!`));
        // ! Note
        // old fashioned way to reload data
        // can use custom event, too
        window.location.reload();
      })
      .catch(() => {
        dispatch(show(`Error in restoring Card #${query.cardId}`));
      });
  }

  return { ...query, dispatch, undoDeletedCard };
};
