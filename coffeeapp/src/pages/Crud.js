import React,{ useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../components/Stripe';
import PaymentForm from '../components/PaymentForm';


function Crud() {
  const [newName, setNewName] = useState("");
  const [newOrder, setNewOrder] = useState();
  const [editingUser, setEditingUser] = useState(null);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      order: newOrder,
    });
    setNewName("");
    setNewOrder(0);
  };

  const updateUser = async (id) => {
    const userDoc = doc(db, "users", id);
    const newFields = { order: newOrder };
    await updateDoc(userDoc, newFields);
    setEditingUser(null);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [usersCollectionRef]);



  return (
    <div className="App">
      <div className="BearBackground"></div>

      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>

      <input
        placeholder="Name..."
        value={newName}
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="Order"
        placeholder="Order..."
        value={newOrder}
        onChange={(event) => {
          setNewOrder(event.target.value);
        }}
      />

      <button className="create-button" onClick={createUser}>
        {" "}
        Create Order{" "}
      </button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {" "}
            <h1 className="name">User Name: {user.name}</h1>
            <h1 className="order">Order: {user.order}</h1>
            {editingUser === user.id ? (
              <>
                <input
                  type="Order"
                  placeholder="New Order..."
                  value={newOrder}
                  onChange={(event) => {
                    setNewOrder(event.target.value);
                  }}
                />
                <button
                  className="custom-button"
                  onClick={() => {
                    updateUser(user.id);
                  }}
                >
                  {" "}
                  Update Order
                </button>
              </>
            ) : (
              <button
                className="custom-button"
                onClick={() => {
                  setEditingUser(user.id);
                }}
              >
                {" "}
                Edit Order
              </button>
            )}
            <button
              className="delete-button"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Crud;

