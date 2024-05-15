import {useParams} from "react-router-dom";


export const CoinDetail = () => {
  const params = useParams();
  //console.log(params);
  return (
    <div>this is the Coins {params.id} Details page</div>
  )
}