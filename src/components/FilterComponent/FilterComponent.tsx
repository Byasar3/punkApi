import { FormEventHandler } from "react";
import "./FilterComponent.scss";

type FilterComponentProps = {
  type: string;
  nameOfWhatItIsFilteringFor: string;
  searchTerm?: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const FilterComponent = ({
  type,
  nameOfWhatItIsFilteringFor,
  searchTerm,
  handleInput,
}: FilterComponentProps) => {
  return (
    <div className="search-box">
      <label htmlFor="">{nameOfWhatItIsFilteringFor}</label>
      <input
        type={type}
        id={nameOfWhatItIsFilteringFor}
        name={nameOfWhatItIsFilteringFor}
        value={searchTerm}
        onInput={handleInput}
        onChange={handleInput}
      />
    </div>
  );
};

export default FilterComponent;
