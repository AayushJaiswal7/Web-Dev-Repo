
import Product from "./Product.jsx";
function Card() {
    let options=["hi-tech", "durable","fast"];
    return (
      <div>

      <Product title="phone" price={30000} />
      <Product title="laptop" price={40000} />
      <Product title="pen"  />

      </div>
    );
  }
  export default Card;