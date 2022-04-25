/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';

const Clickcounter = (props) => {
  return (
    <>
      <Button onClick={props.increment}>
        {props.name}Clicked {props.count} times
      </Button>
    </>
  );
};
export default Clickcounter;
