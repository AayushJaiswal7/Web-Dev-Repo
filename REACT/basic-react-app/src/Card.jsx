
import Product from "./Product.jsx";
function Card() {
    let options=["hi-tech", "durable","fast"];
    let options2 = {a:"hi-tech",b: "durable",c:"fast"};
    return (
      <>

      <Product title="phone" price={30000} features={options} features2={options2}/>
      {/* <Product title="laptop" price={40000} />
      <Product title="pen" price={1} /> */}

      </>
    );
  }
  export default Card;