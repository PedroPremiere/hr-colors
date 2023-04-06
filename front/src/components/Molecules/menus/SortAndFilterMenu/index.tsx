import ListItem from "@/Molecules/listItems";

import styles from "./styles.module.scss";
import ComboBox from "@/Atoms/comboBoxes";
import AddItemForm from "@/Atoms/forms/addItemForm";

const SortAndFilterMenu = () => {
  return (
    <>
      <div>
        <AddItemForm />
        <ComboBox />
      </div>
    </>
  );
};

export default SortAndFilterMenu;
