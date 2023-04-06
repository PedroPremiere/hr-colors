import SubTitle from "@/Atoms/texts/subTitle";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.gradient}>
      <div className={styles.headerWrapper}>
        <SubTitle />
      </div>
    </div>
  );
};

export default Header;
