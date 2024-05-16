import {useParams} from "react-router-dom";


export const ProductDetail = () => {
  const params = useParams();
  //console.log(params);
  return (
    <div>this is the Product {params.id} Details page</div>
  )
}
