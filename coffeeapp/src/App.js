
import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newOrder, setNewOrder] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      order: newOrder,
    });
  };

  const updateUser = async (id, order) => {
    const userDoc = doc(db, "users", id);
    const newFields = { order: order + 1 };
    await updateDoc(userDoc, newFields);
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
  }, []);

  return (
        <div className="App">
          <input
            placeholder="Name..."
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
          <input
            type="Order"
            placeholder="Order..."
            onChange={(event) => {
              setNewOrder(event.target.value);
            }}
          />

          <button className="create-button" onClick={createUser}>
            {" "}
            Create User{" "}
          </button>
          {users.map((user) => {
            return (
              <div key={user.id}>
                {" "}
                <h1 className="name">Name: {user.name}</h1>
                <h1 className="orders">Order: {user.order}</h1>
                <button
                  className="
            custom-button"
                  onClick={() => {
                    updateUser(user.id);
                  }}
                >

                </button>
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

export default App;
