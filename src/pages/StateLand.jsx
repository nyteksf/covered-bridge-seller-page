import React from "react";
import { useParams } from "react-router-dom";

const StateLand = () => {
  const paramResult = useParams();
  return <div>{paramResult}</div>;
};

export default StateLand;
