import "./Product.css";

function Product({ title, price, features, features2 }) {
    // console.log(props);
    // console.log(features);
const list=features.map((feature)=><li>{feature}</li>);

    return (
        <div className="Product">
            <h3>{title}</h3>
            <h3>Price: {price}</h3>
            {/* <p>{features}</p> */}
            <p>{list}</p>
        </div>
    );
}
export default Product;