// import React from 'react'
import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import Cardshape from "../Cardshape/Cardshape";
import Modal from '../../Modal/Modal';

const Card = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({
    image: '',
    description: '',
    isOpen: false
  })
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((rs) => {
        console.log(rs);
        setData(rs);
      });
  }, []);
  return (
    <div className={styles.main}>
      {data &&
        data.map((n, i) => {
          return (
            <Cardshape
              key={i}
              imge={n.image}
              title={n.title}
              price={n.price}
              description={n.description}
              setModal={setModal}
              imgwrap
              box
            />
          );
        })}
        {
          modal.isOpen && <Modal {...modal} setModal={setModal} />  
        }
    </div>
  );
};

export default Card;
