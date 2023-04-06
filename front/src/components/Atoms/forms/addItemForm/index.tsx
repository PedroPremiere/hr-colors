import SubTitle from "@/Atoms/texts/subTitle";

import styles from "./styles.module.scss";

const AddItemForm = () => {
  return (
    <form>
      <label htmlFor="fname">New Color:</label>
      <input type="text" id="fname" name="fname" value="John" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddItemForm;
