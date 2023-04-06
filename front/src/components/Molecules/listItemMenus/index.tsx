import RoundedButton from "@/Atoms/buttons/rounded";

import styles from "./styles.module.scss";

const ListItemMenu = () => {
  const possibleOptions = ["edit", "remove"];

  return (
    <>
      {possibleOptions.map((item) => (
        <div className={styles.wrapper}>
          <RoundedButton />
        </div>
      ))}
    </>
  );
};

export default ListItemMenu;
