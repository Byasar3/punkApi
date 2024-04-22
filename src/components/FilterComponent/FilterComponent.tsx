import { FormEventHandler } from "react";
import "./FilterComponent.scss";

type FilterComponentProps = {
  type: string;
  nameOfFilter: string;
  searchTerm?: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const FilterComponent = ({
  type,
  nameOfFilter,
  searchTerm,
  handleInput,
}: FilterComponentProps) => {
  return (
    <div className="search-box">
      <label htmlFor="">{nameOfFilter}</label>
      <input
        type={type}
        id={nameOfFilter}
        name={nameOfFilter}
        value={searchTerm}
        onInput={handleInput}
        onChange={handleInput}
      />
    </div>
  );
};

export default FilterComponent;
