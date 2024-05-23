import {useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';

export const CoinDetail = () => {
  const params = useParams();
  //console.log(params);

return (
  <>
  <div>this is the Coins {params.id} Details page</div> 
  </>
);
}
       