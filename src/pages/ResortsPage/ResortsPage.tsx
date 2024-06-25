import React, { useEffect } from "react";
import { searchResort } from "../../apiCalls/apiCalls";

const ResortsPage = () => {
  useEffect(() => {
    let result = searchResort("sugarbush");
    console.log(result);
  }, []);
  return <div>this is the resorts page</div>;
};

export default ResortsPage;
