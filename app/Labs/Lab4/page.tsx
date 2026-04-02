"use client";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import store from "./store";
import { Provider } from "react-redux";
import StringStateVariables from "./StringStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";

export default function Lab4() {
    function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-passing-functions">
        
    <Provider store={store}>
      <div>
        <h2>Lab 4</h2>
        <ClickEvent />
        <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />
      <ClickEvent />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
    <ParentStateComponent />
        <ReduxExamples/>
      </div>
    </Provider>
    </div>
    

  );
}