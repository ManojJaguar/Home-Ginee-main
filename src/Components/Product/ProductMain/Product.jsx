import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Features/Cart/cartSlice";

import product1 from "../../../Assets/ProductDetail/productdetail-1.jpg";
import product2 from "../../../Assets/ProductDetail/productdetail-2.jpg";
import product3 from "../../../Assets/ProductDetail/productdetail-3.jpg";
import product4 from "../../../Assets/ProductDetail/productdetail-4.jpg";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { PiShareNetworkLight } from "react-icons/pi";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import "./Product.css";

const Product = () => {
  // Product images Gallery
  const productImg = [product1, product2, product3, product4];
  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? productImg.length - 1 : currentImg - 1);
  };

  const nextImg = () => {
    setCurrentImg(currentImg === productImg.length - 1 ? 0 : currentImg + 1);
  };

  // Product Quantity
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) setQuantity(value);
  };

  // Wishlist
  const [clicked, setClicked] = useState(false);
  const handleWishClick = () => setClicked(!clicked);

  // Redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const productDetails = {
      productID: 14,
      productName: "Lightweight Puffer Jacket",
      productPrice: 90,
      frontImg: productImg[0],
      productReviews: "8k+ reviews",
    };

    const productInCart = cartItems.find(
      (item) => item.productID === productDetails.productID
    );

    if (productInCart && productInCart.quantity >= 20) {
      toast.error("Product limit reached", {
        duration: 2000,
        style: { backgroundColor: "#ff4b4b", color: "white" },
        iconTheme: { primary: "#fff", secondary: "#ff4b4b" },
      });
    } else {
      dispatch(addToCart(productDetails));
      
    }
  };

  return (
    <div className="productSection">
      <div className="productShowCase">
        {/* Product Gallery */}
        <div className="productGallery">
          <div className="productThumb">
            <img src={product1} onClick={() => setCurrentImg(0)} alt="thumb1" />
            <img src={product2} onClick={() => setCurrentImg(1)} alt="thumb2" />
            <img src={product3} onClick={() => setCurrentImg(2)} alt="thumb3" />
            <img src={product4} onClick={() => setCurrentImg(3)} alt="thumb4" />
          </div>
          <div className="productFullImg">
            <img src={productImg[currentImg]} alt="product" />
            <div className="buttonsGroup">
              <button onClick={prevImg} className="directionBtn">
                <GoChevronLeft size={18} />
              </button>
              <button onClick={nextImg} className="directionBtn">
                <GoChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="productDetails">
          <div className="productBreadcrumb">
            <div className="breadcrumbLink">
              <Link to="/">Home</Link>&nbsp;/&nbsp;
              <Link to="/shop">The Shop</Link>
            </div>
            <div className="prevNextLink">
              <Link to="/product">
                <GoChevronLeft />
                <p>Prev</p>
              </Link>
              <Link to="/product">
                <p>Next</p>
                <GoChevronRight />
              </Link>
            </div>
          </div>

          <div className="productName">
            <h1>Lightweight Puffer Jacket With a Hood</h1>
          </div>

          <div className="productRating">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#FEC78A" size={10} />
            ))}
            <p>8k+ reviews</p>
          </div>

          <div className="productDescription">
            <p>
              Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
              elementum gravida nec dui. Aenean aliquam varius ipsum, non
              ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
              aliquet magna posuere eget.
            </p>
          </div>

          {/* Cart + Quantity */}
          <div className="productCartQuantity">
            <div className="productQuantity">
              <button onClick={decrement}>-</button>
              <input
                type="text"
                value={quantity}
                onChange={handleInputChange}
              />
              <button onClick={increment}>+</button>
            </div>
            <div className="productCartBtn">
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>

          {/* Wishlist + Share */}
          <div className="productWishShare">
            <div className="productWishList">
              <button onClick={handleWishClick}>
                <FiHeart color={clicked ? "red" : ""} size={17} />
                <p>Add to Wishlist</p>
              </button>
            </div>
            <div className="productShare">
              <PiShareNetworkLight size={22} />
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;