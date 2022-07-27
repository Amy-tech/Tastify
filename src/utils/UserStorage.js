import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./init-firebase";

const UserStorage = () => {
  // STATE
  const [userInfo, setUserInfo] = useState([]); //innitial user state is an empty array

  // USE EFFECT
  useEffect(() => {
    getUserInfo();
  }, []); //will run as soon as the component mounts

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]); //will run as soon as the userInfo state changes

  // GETTING USER INFORMATION FROM FIRESTORE
  const getUserInfo = () => {
    const userCollectionRef = collection(firestore, "usersList");
    getDocs(userCollectionRef)
      .then((res) => {
        console.log(res.docs);
        // mapping through each document in usersList firestore and presenting the doc data
        const userSnapshot = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setUserInfo(userSnapshot);
      })
      .catch((err) => console.log(err.message)); //name of firestore collection
  };

  return (
    <div>
      <p>This is the UserStorage page</p>
      <ul>
        {userInfo.map((user) => (
          <li key={user.id}>{user.data.displayName}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserStorage;

//rafce
