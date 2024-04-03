import { Button } from "flowbite-react";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ setOpenModal }: Props) => {
  return (
    <>
      <div className="flex justify-center items-center gap-3 my-2 bg-orange-500 text-white p-5 rounded-md">
        <figure>
          <img src="" alt="  logo" />
        </figure>
        <div className="border flex items-center gap-1 rounded-md flex-[2] bg-white">
          <input
            type="search"
            placeholder="search products"
            name=""
            id=""
            className="border-0 ring-0 focus:ring-0 text-black bg-transparent focus:outline-0 focus:border-0
                  active:border-0 active:outline-0
                  outline-0 w-full h-full"
          />
          <span className="bg-orange-300 h-full px-6 py-2 my-1  rounded-md">
            <RiSearch2Line />
          </span>
        </div>
        <span className="flex items-center gap-2">
          <CiUser />
          <h5>Login</h5>
        </span>
        <span className="flex items-center ">
          <h5>SignUp</h5>
        </span>
        <span className="flex items-center gap-2">
          <AiOutlineGlobal />

          <h5>EN</h5>
        </span>
      </div>

      <div className="flex justify-between items-center my-3 ">
        <h6 className="text-green-950 capitalize font-medium">on sale show</h6>
        <div>
          <Button onClick={() => setOpenModal(true)}>create</Button>
        </div>
      </div>
      <div className="h-[0.3px] w-full bg-black"></div>
    </>
  );
};

export default Header;
