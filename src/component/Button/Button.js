import React from "react";
import styles from "./Button.module.css";


// mitoni in karo bokoni k prop haye morede niaz ro extrat koni va bagia ro k besorate ...props migiri b button bedi dar in ravesh har propi k extract nakardi ro mide be button masalan onClick va in ravesh behtare
// const Button = ({info ,title ,...props}) => {
//   return (
//     <>
//       <button className={info ? styles.infos : styles.gray} {...props}>
//         {title}
//       </button>
//     </>
//   );
// };


// yamitoni mesle in halat fagat onClick ro bedi
const Button = (props) => {
  return (
    <>
      <button className={props.infos ? 'gray' : styles.gray} onClick={props.onClick}>
        {props.title}
      </button>
    </>
  );
};

export default Button;
