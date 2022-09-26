import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { configureStore } from './../../app/store/configureStore';
import { Button } from "semantic-ui-react";
import { increment, decrement } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <h3>Testing 123</h3>
      <h4>The data is : {data} </h4>
      <Button
        onClick={() => dispatch(increment(20))}
        content='Increment'
        color='green'
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content='Decrement'
        color='red'
      />
    </>
  );
}
