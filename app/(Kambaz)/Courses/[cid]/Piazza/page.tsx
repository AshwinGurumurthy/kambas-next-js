export default function Piazza() {
  
  const { currentUser } = useSelector(
    (state: storeType) => state.accountReducer
  );
  if (currentUser) return redirect("/Pazza/Class/RS101");
  else return redirect("/Account/Signin?redirect=/Pazza/Class/RS101");

}