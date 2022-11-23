import { formatMoney } from "../../../utils/formatMoney";

const ItemList = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>

      <h4>{product.description}</h4>
      <h5>{formatMoney(product.price)}</h5>

      {product.images.map((image) => (
        <img key={image} src={image} width={150} />
      ))}
    </div>
  );
};

export default ItemList;
