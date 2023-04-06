import styles from "./styles.module.scss";

const RGBFilter = () => {
  return (
    <>
      <div className={styles.slidecontainer}>
        <div className={styles.sliderWrapper}>
          <p>Red</p>
          <input type="range" min="1" max="100" className={styles.slider} />
        </div>
        <div className={styles.sliderWrapper}>
          <p>Green</p>
          <input type="range" min="1" max="100" className={styles.slider} />
        </div>
        <div className={styles.sliderWrapper}>
          <p>Blue</p>
          <input type="range" min="1" max="100" className={styles.slider} />
        </div>
      </div>
    </>
  );
};

export default RGBFilter;
