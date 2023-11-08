import React, {useContext} from "react";
import { Container } from "./ContextApi";
import '../Shopping_Cart/OneProducts.css';

const OneProducts = (props) => {
  const { cart, setcart } = useContext(Container);

  const { p } = props;
  const { id, title, author, imgPath, Price } = p;
  return (
    <div>
      <img
        src={imgPath}
        alt="book"
        style={{ width: "200px", height: "200px" }}
      />
      <h3 className="f">{title}</h3>
      <i className="h">{author}</i>
      <br />
      <b className="y">{Price}</b>
      <br/>
      {cart.includes(p) ? (
        <button
          onClick={() => {
            setcart(cart.filter((c) => c.id !== id));
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button 
          onClick={() => {
            setcart([...cart, p]);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default OneProducts;
