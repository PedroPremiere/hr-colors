import List from "@/Organisms/lists";
import Header from "@/Molecules/headers";
import SortAndFilterMenu from "@/Molecules/menus/SortAndFilterMenu";
import FilterByColorMenu from "@/Molecules/menus/filterByColorMenu";
import HideAbleUpDown from "@/Atoms/hideAble/UpDown";

const MainPage = () => {
  return (
    <>
      <div>
        <Header />

        <SortAndFilterMenu />
        <div>
          <HideAbleUpDown />
          <FilterByColorMenu />
        </div>
      </div>

      <List />
    </>
  );
};

export default MainPage;
