import styles from "./CSSModule.module.css";

const CSSMoudule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      Hallo, I am <span className="something">CSS Moudle!</span>
    </div>
  );
};

// const name = "react";
// const message = "my name is" + name + '!!!';
// const message = `my name is ${name}!!!`;

// className={[styles.wrapper, styles.inverted].join(' ')}

export default CSSMoudule;
