import RGBFilter from "@/Atoms/filters/rgbFilter";

const FilterByColorMenu = () => {
  return (
    <>
      <p>Greater than:</p>
      <div>
        <RGBFilter />
      </div>
      <p>Less than:</p>
      <div>
        <RGBFilter />
      </div>
    </>
  );
};

export default FilterByColorMenu;
