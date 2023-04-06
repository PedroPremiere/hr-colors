import ListItem from "@/Molecules/listItems";

import styles from "./styles.module.scss";

const List = () => {
  const items = [1, 2, 34, 5, 6, 7, 8];

  return (
    <>
      {items.map((item) => (
        <div className={styles.listItemWrapper}>
          <ListItem />
        </div>
      ))}
    </>
  );
};

export default List;
