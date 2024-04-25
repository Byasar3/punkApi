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
   const inputId = `filter-${nameOfFilter.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className="search-box">
      <label htmlFor={inputId} >{nameOfFilter}</label>
      <input
        type={type}
        id={inputId}
        name={nameOfFilter}
        value={searchTerm}
        onInput={handleInput}
        onChange={handleInput}
      />
    </div>
  );
};

export default FilterComponent;
