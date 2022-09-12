import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useSelector } from "react-redux";
import { Col, Image, Row } from "react-bootstrap";

const Receipt = () => {
  const { shopProduct } = useSelector((state) => state.shopProducts);
  console.log("shopProduct in receipt", shopProduct);
  const filterShopProduct =
    shopProduct && shopProduct.filter((prod) => prod.minQuantity > 0);
  console.log("filterShopProduct in receipt", filterShopProduct);
  const location = queryString.parse(useLocation().search);
  const products = location.shopproducts;
  return (
    <>
      <div className="container mt-2">
        <div>
          <h3 className="text-center" style={{ fontFamily: "Georgia" }}>Receipt</h3>
          <hr />
        </div>
        <div>
          {filterShopProduct &&
            filterShopProduct.map((prod, ind) => {
              return (
                <div key={ind} className="mt-2 d-flex justify-content-center">
                    <div>
                      <Image
                        src={require(`./images/${prod.imageName}`)}
                        alt="image"
                        style={{width:"100px"}}
                      />
                    </div>
                    <div>
                      <div className="ms-3">
                        <h5>{prod.name}</h5>
                        <div style={{ margin: "-5px 0 0" }} className="d-flex">
                            <b>Price: </b>
                            <p>{" "}₹{prod.price}</p>
                        </div>
                        <div style={{ margin: "-15px 0 -15px 0" }} className="d-flex">
                            <b>Quantity: </b>
                        <p >{prod.minQuantity}</p>
                        </div>
                        <div className="d-flex">
                            <b>Total Price:</b>
                            <p>₹{prod.price*prod.minQuantity}</p>
                        </div>
                      </div>
                    </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Receipt;
