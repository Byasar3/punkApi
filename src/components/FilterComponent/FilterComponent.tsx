import { FormEventHandler } from "react";
import "./FilterComponent.scss";

type FilterComponentProps = {
  nameOfWhatItIsFilteringFor: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const FilterComponent = ({
  nameOfWhatItIsFilteringFor,
  searchTerm,
  handleInput,
}: FilterComponentProps) => {
  return (
    <div className="search-box">
      <input
        type="text"
        id={nameOfWhatItIsFilteringFor}
        name={nameOfWhatItIsFilteringFor}
        placeholder={nameOfWhatItIsFilteringFor}
        value={searchTerm}
        onInput={handleInput}
      />
    </div>
  );
};

export default FilterComponent;
