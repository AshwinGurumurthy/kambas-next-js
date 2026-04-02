"use client";
import { useSelector } from "react-redux";
import { redirect, useParams } from "next/navigation";
import { RootState } from "@/app/(Kambaz)/store";

export default function Piazza() {

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  
  const { cid } = useParams();
  if (currentUser) return redirect(`/Pazza/Class/${cid}`);
  else return redirect(`/Account/Signin?redirect=/Pazza/Class/${cid}`);

}
