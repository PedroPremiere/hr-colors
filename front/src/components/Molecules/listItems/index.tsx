import RoundedButton from "@/Atoms/buttons/rounded";

import styles from "./styles.module.scss";
import ListItemMenu from "@/Molecules/listItemMenus";

const ListItem = () => {
  const possibleOptions = ["edit", "remove"];

  return (
    <div className={styles.listItemWrapper}>
      <div>koko</div>

      <div>
        <ListItemMenu />
      </div>
    </div>
  );
};

export default ListItem;
