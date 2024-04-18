import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  placeholder: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  placeholder,
  searchTerm,
  handleInput,
}: SearchBoxProps) => {
  return (
    <div className="search-box">
      <input
        type="text"
        id={placeholder}
        name={placeholder}
        placeholder={placeholder}
        value={searchTerm}
        onInput={handleInput}
      />
    </div>
  );
};

export default SearchBox;
