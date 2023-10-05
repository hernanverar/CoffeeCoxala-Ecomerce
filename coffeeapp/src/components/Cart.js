// import { AddRounded, RemoveRounded } from "@mui/icons-material";
// import React, { useEffect, useState } from "react";
// import { MenuList} from "./helpers/MenuList";
// import { useStateValue } from "./StateProvider";
// let cartItems = [];

// function Cart({name, price}) {
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
//     <div>
//     <div className="itemSection">
//     <h2 className="itemName">{name}</h2>
//     <div className="itemQuantity">
//       <span>x {qty}</span>
//       <div className="quantity">
//         <RemoveRounded
//           className="itemRemove"
//           onClick={() => updateQty("remove", itemId)}
//         />
//         <AddRounded
//           className="itemAdd"
//           onClick={() => updateQty("add", itemId)}
//         />
//       </div>
//     </div>
//   </div>
//   <p className="itemPrice">
//     <span className="dolorSign">$</span>{" "}
//     <span className="itemPriceValue">{itemPrice}</span>
//   </p>
// </div>
//   )
// }

// export default Cart
