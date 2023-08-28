import "./Product-List.css";
import Product from "../product/Product";
import { Products } from "../../Data.js";

const ProductList = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">
            Create & inspire.
            {/* It's <i>babartstyle</i> */}
          </h1>
          <p className="pl-desc">
            those are some of my digital sketches {" "}
            {/* <a
              href="https://instagram.com/babartstyle?igshid=YmMyMTA2M2Y="
              target={"_blank"}
              rel="noreferrer"
              color="green"
            >
              babartstyle
            </a> */}
          </p>
          <p>...</p>
        </div>
        <div className="pl-list">
          {Products.map((item) => (
            <Product key={item.id} img={item.img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
