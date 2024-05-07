import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { ROUTES } from "../../utils/routes";

<<<<<<< HEAD
type SearchInputProps = {
  closeInput: () => void;
};

const SearchInput = ({ closeInput }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
=======
const SearchInput = ({ ...props }) => {
  const [searchValue, setSearchValue] = useState("");
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
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
<<<<<<< HEAD
      console.log(searchValue);
      navigate(ROUTES.SEARCH, { state: { search: searchValue } });
      closeInput();
    }
  };

  console.log(searchValue);

=======
      navigate(ROUTES.SEARCH, { state: { search: searchValue } });
      props.closeInput();
    }
  };

>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
  return (
    <form
      onSubmit={submitSearchValue}
      className="ml-auto mr-4 flex h-10 w-full items-center border-b-2 border-grey-normal md:w-96"
    >
<<<<<<< HEAD
      <FaSearch
        className="w-[20%] cursor-pointer"
        onClick={searchValueHandle}
      />
      <input
        className="w-[60%] bg-transparent outline-none  placeholder:text-sm placeholder:font-light "
=======
      <button onClick={searchValueHandle} className="w-[10%] cursor-pointer">
        <FaSearch />
      </button>
      <input
        className="w-[80%] bg-transparent outline-none  placeholder:text-sm placeholder:font-light "
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
        placeholder="Search products"
        value={searchValue}
        onChange={changeSearchValue}
      />
<<<<<<< HEAD
      <AiOutlineClose onClick={closeInput} className="w-[20%] cursor-pointer" />
=======
      <button onClick={props.closeInput} className=" w-[10%] cursor-pointer">
        <AiOutlineClose />
      </button>
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
    </form>
  );
};

export default SearchInput;
