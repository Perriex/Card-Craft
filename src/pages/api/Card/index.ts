import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { cardType } from "@CardCraft/types/card";


import { useAppDispatch } from "@CardCraft/app/hooks";

import { engine } from "../engine";
import { show } from "@CardCraft/features/toast/toastSlice";
import { useState } from "react";

const schema = yup.object({
  status: yup.bool().required(),
  createdAt: yup.string().required(),
  updatedAt: yup.string().required(),

  nameOfHolder: yup.string().required(),

  card: yup.string().length(16).required(),
  IBAN: yup.string().length(22).required(),
  account: yup.string().length(13).required(),

  expireMonth: yup.string().min(0).max(12).required(),
  expireYear: yup.string().min(0).max(99).required(),

  description: yup.string(),
});

const useCard = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const today = new Date().toLocaleDateString();

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameOfHolder: "",
      card: "",
      IBAN: "",
      account: "",
      status: false,
      expireMonth: "",
      expireYear: "",
      description: "",
      createdAt: today,
      updatedAt: today,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<cardType> = (data) => {
    setLoading(true);
    engine({
      url: "/cards",
      method: "post",
      data: data,
    })
      .then(() => {
        dispatch(show("new card added"));
        reset();
      })
      .catch(() => {
        dispatch(show("adding new card failed"));
      })
      .finally(() => setLoading(false));
  };

  return {
    id,
    control,
    errors,
    loading,
    handleSubmit,
    onSubmit,
  };
};

export default useCard;
