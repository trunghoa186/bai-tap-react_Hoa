import React,  { useEffect, useState } from "react";

import Card from "../card";


import "./cardList.css";

// Tạo default data
const userInfo = {
  image:"https://picsum.photos/200",
  name:"ROBORT PATTINSON",
  role:"developer",
  birthday:"23/05/2014",
  mark:"B+",
  edu:"MCA",
  address:"Bangalore",
  email:"robot12@gmail.com",
  phone:"0900909099",
  age: 18,
};




function CardList(props) {
  // khởi tạo state và gán giá trị mặc định bằng default data

  const [user, setUser] = useState(userInfo);

  useEffect(() => {
    // setUser({
    //   ...user,
    //   name: "TRINH DINH PHUONG",
    // })

    // setUser((preState) => {
    //   return ({
    //     ...preState,
    //     name: "TRINH DINH PHUONG",
    //   })
    // })

    setUser((preState) => ({
      ...preState,
      name: "Huỳnh Trung Hòa",
    }));
  }, []);

  const onPlusAge = () => {
    setUser((preState) => ({
      ...preState,
      age: preState.age + 1,
    }));
  }

  const onMinusAge = () => {
    setUser((preState) => ({
      ...preState,
      age: preState.age - 1,
    }));
  }

  const onReset = () => {
    setUser(userInfo);
  }

  return (
    <div className="card-list">
      <Card
        info={user}
        onPlusAge={onPlusAge}
        onMinusAge={onMinusAge}
        onReset={onReset}
      />

    </div>
  );
}

export default CardList;
