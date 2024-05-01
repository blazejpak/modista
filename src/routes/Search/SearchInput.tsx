import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { ROUTES } from "../../utils/routes";

type SearchInputProps = {
  closeInput: () => void;
};

const SearchInput = ({ closeInput }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
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
      console.log(searchValue);
      navigate(ROUTES.SEARCH, { state: { search: searchValue } });
      closeInput();
    }
  };

  console.log(searchValue);

  return (
    <form
      onSubmit={submitSearchValue}
      className="ml-auto mr-4 flex h-10 w-full items-center border-b-2 border-grey-normal md:w-96"
    >
      <FaSearch
        className="w-[20%] cursor-pointer"
        onClick={searchValueHandle}
      />
      <input
        className="w-[60%] bg-transparent outline-none  placeholder:text-sm placeholder:font-light "
        placeholder="Search products"
        value={searchValue}
        onChange={changeSearchValue}
      />
      <AiOutlineClose onClick={closeInput} className="w-[20%] cursor-pointer" />
    </form>
  );
};

export default SearchInput;
