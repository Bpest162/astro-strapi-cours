import type { IProduct } from "../types/product";
import { useState } from "react";

interface PropductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: PropductCardProps) => {
  const [details, setDetails] = useState(false);

  const toggle = () => {
    return setDetails(prev => !prev);
  }
  return (
    <div className="w-[300px] flex flex-col items-center border-blue-500 border-2 rounded-2xl p-[8px]">
      <img className="w-[300px] h-[300px] mb-3 object-contain" src={`http://127.0.0.1:1337${product.image.url}`} alt="" />
      <div className="flex items-center justify-between w-[100%]">
        <h3 className="text-lg font-semibold mb-3">{product.name}</h3>
        <p className="text-lg font-bold mb-3">{product.price} $</p>
      </div>
      <button onClick={toggle} className="border p-2 bg-blue-400 w-[100%] mb-2">Description</button>
      {details && <p className="text-lg font-normal">{product.description}</p>}
      <a className="border p-2 bg-blue-400 w-[100%] text-center" href={`/product/${product.id}`}>
            Product details
          </a>
    </div>
  );
};

export default ProductCard;