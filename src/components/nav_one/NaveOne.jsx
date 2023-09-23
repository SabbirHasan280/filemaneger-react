import React from "react";
import { IoDesktop } from "react-icons/io5";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { TfiControlEject } from "react-icons/tfi";

const NaveOne = () => {
    return (
        <div>
            <div className=" w-screen bg-black">
                <ul className=" flex p-2">
                    <li className=" text-[20px] mr-2 text-cyan-500"><IoDesktop /></li>
                    <li className="text-[14px] mr-2 text-zinc-500">||</li>
                    <li className="text-[20px] mr-2 text-zinc-200"><BsFillFileEarmarkCheckFill /></li>
                    <li className="text-[20px] mr-2 text-gray-300"><HiOutlineNewspaper /></li>
                    <li className="text-[20px] mr-2 text-white"><TfiControlEject /></li>
                    <li className="text-[14px] mr-2 text-zinc-500">||</li>
                    <li className=" text-slate-100">This PC</li>
                </ul>
            </div>
            {/* <NaveTwo /> */}
        </div>


    )
}
export default NaveOne;