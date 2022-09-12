import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productAction } from "./redux/actions/productActions";
import { decrement, increment } from "./redux/reducers/productReducer";

const ShoppingPage = () => {
  const dispatch = useDispatch();
  const { shopProduct } = useSelector((state) => state.shopProducts);
  const [shopProducts, setShopProducts] = useState()
  console.log("shopProduct is", shopProducts);
  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);
  useEffect(() => {
    if(shopProduct){
      setShopProducts(shopProduct)
    }
  }, [shopProduct])
  
  return (
    <>
    <div className="container">
      <Row>
        <Col lg={8}>
        <div>
        {shopProducts &&
          shopProducts.map((product, index) => {
            return (
              <div key={index} className=" d-flex mt-4">
                <div>
                  <Image
                    src={require(`./images/${product.imageName}`)}
                    alt="image"
                    style={{ width: "150px" }}
                  />
                </div>
                <div className="ms-3">
                  <h6>{product.name}</h6>
                  <p style={{margin:"-5px 0 0"}}>₹{product.price}</p>
                  <div className=" d-flex justify-content-around text-center  align-items-center ">
                    <Button onClick={() => dispatch(decrement({product_id:product.id}))} className="px-2">-</Button>
                    <span className="mx-2">{product.minQuantity}</span>
                    <Button onClick={() => dispatch(increment({product_id:product.id}))} className="px-2">+</Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
        </Col>
        <Col lg={4}>
          <Button className="mt-5 btn btn-secondary w-100">
            <Link to={`receipt`} className="">Checkout</Link>
          </Button>
        </Col>
      </Row>
    </div>
      
      
    </>
  );
};

export default ShoppingPage;
