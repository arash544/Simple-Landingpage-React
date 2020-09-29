import React from "react";
import styles from "./Footer.module.css";
import Footershape from "../Footershape/Footershape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
  return (
    <>
      <Footershape
        phone={faPhoneSquare}
        email={faEnvelope}
        text="Copyright © 2020 All Rights Reserved by Arash Azim Doust."
      />
    </>
  );
};

export default Footer;
