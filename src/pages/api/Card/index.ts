import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { cardType } from "@CardCraft/types/card";

import { useAppDispatch } from "@CardCraft/app/hooks";

import { engine } from "../engine";
import { show } from "@CardCraft/features/toast/toastSlice";

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
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString();

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
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
      url: "/cards/" + (id ?? ""),
      method: id ? "PUT" : "POST",
      data: data,
    })
      .then(() => {
        dispatch(show((id ? "Edit" : "Add new") + " card successful"));
        if (id) navigate("/");
        else reset();
      })
      .catch(() => {
        dispatch(show((id ? "Editing" : "Adding new") + " card failed"));
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      engine({
        url: "/cards/" + id,
        method: "GET",
      })
        .then((res) => {
          setValue("nameOfHolder", res.data.nameOfHolder);
          setValue("card", res.data.card);
          setValue("IBAN", res.data.IBAN);
          setValue("account", res.data.account);
          setValue("status", res.data.status);
          setValue("expireMonth", res.data.expireMonth);
          setValue("expireYear", res.data.expireYear);
          setValue("description", res.data.description);
          setValue("createdAt", res.data.createdAt);
          setValue("updatedAt", today);
        })
        .catch(() => {
          dispatch(show("No card found by this id!"));
        })
        .finally(() => setLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
