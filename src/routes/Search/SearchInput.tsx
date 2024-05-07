import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { ROUTES } from "../../utils/routes";

const SearchInput = ({ ...props }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const changeSearchValue = (e: FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const searchValueHandle = () => {
    if (searchValue) {
      console.log(searchValue);
      navigate(ROUTES.SEARCH, { state: { search: searchValue } });
    }
  };

  const submitSearchValue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue) {
      navigate(ROUTES.SEARCH, { state: { search: searchValue } });
      props.closeInput();
    }
  };

  return (
    <form
      onSubmit={submitSearchValue}
      className="ml-auto mr-4 flex h-10 w-full items-center border-b-2 border-grey-normal md:w-96"
    >
      <button onClick={searchValueHandle} className="w-[10%] cursor-pointer">
        <FaSearch />
      </button>
      <input
        className="w-[80%] bg-transparent outline-none  placeholder:text-sm placeholder:font-light "
        placeholder="Search products"
        value={searchValue}
        onChange={changeSearchValue}
      />
      <button onClick={props.closeInput} className=" w-[10%] cursor-pointer">
        <AiOutlineClose />
      </button>
    </form>
  );
};

export default SearchInput;
