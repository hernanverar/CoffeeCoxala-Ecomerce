
// import React, { useEffect, useState } from "react";
// import { useStateValue } from "./StateProvider";


// let cartItems = [];

// function CartItem({ price }) {
//   const [qty, setQty] = useState(1);
//   const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
//   const [{ cart, total }, dispatch] = useStateValue();

//   useEffect(() => {
//     cartItems = cart;
//     setItemPrice(parseInt(qty) * parseFloat(price));
//   }, [qty]);

//   const updateQty = (action, id) => {
//     if (action == "add") {
//       setQty(qty + 1);
//     } else {
//       if (qty == 1) {
//         cartItems.pop(id);
//         dispatch({
//           type: actionType.SET_CART,
//           cart: cartItems,
//         });
//       } else {
//         setQty(qty - 1);
//         console.log(qty);
//       }
//     }
//   };

//   return (
// <div>
//   <p className="itemPrice">
//     <span className="dolorSign">$</span>{" "}
//     <span className="itemPriceValue">{itemPrice}</span>
//   </p>
// </div>
//   )
// }

// export default CartItem;
