"use client";
import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
import { Provider } from "react-redux";
import store from "../store";
import Session from "./Session";

export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
  <Provider store={store}>
    <Session>
   <div id="wd-kambaz">
     <table>
       <tbody>
         <tr>
           <td valign="top">
             <AccountNavigation />
           </td>
           <td valign="top" width="100%">
             {children}
           </td>
         </tr>
       </tbody>
     </table>
  </div>
   </Session>
  </Provider>

);}