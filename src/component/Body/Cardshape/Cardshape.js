import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cardshape.module.css";
import Button from "../../Button/Button";

const Cardshape = props => {
  return (
    <div className={props.box ? 'box':styles.box}>
      <div className={props.imgwrap? 'imgwrap':styles.imgwrap}>
        <img src={props.imge} alt="" />
      </div>
      <h3>{props.title}</h3>
      <h2>{props.price} €</h2>
      <Button
        title="Details"
        infos
        onClick={() => {
          props.setModal({
            image: props.imge,
            description: props.description,
            isOpen: true,
          });
        }}
      />
    </div>
  );
};

export default Cardshape;
