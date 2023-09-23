import React from "react";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import { BiRename } from "react-icons/bi";
import { BsMusicPlayerFill } from "react-icons/bs";
import { TfiHarddrive } from "react-icons/tfi";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { MdAdUnits } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
const NaveIteam = () => {
    return (
        <div className=" md:flex bg-neutral-800">
            <div className="">
                <ul className=" flex items-center border-r-[1.5px] border-gray-700">
                    <li className="text-[30px] text-white px-3 py-6"><BsFillFileEarmarkCheckFill /><p className=" text-[12px] text-gray-300">Properties</p></li>
                    <li className=" text-[30px] text-zinc-400 px-3 py-6"><FaFileUpload /><p className=" text-[12px]">Open</p></li>
                    <li className=" text-[30px] text-zinc-400 px-3 py-6"><BiRename /><p className=" text-[12px]">Rename</p></li>
                </ul>
                <p className="text-zinc-400  md:text-center md:ml-20 md:mt-4">Location</p>
            </div>
            <div className="">
                <ul className=" flex border-r-[1.5px] border-gray-700 item-center">
                    <li className="text-[30px] text-teal-700 px-3 py-6"><BsMusicPlayerFill />
                        <p className="text-[12px] text-gray-300">Access</p>
                        <p className=" text-[12px] text-gray-300"> Media</p>
                    </li>
                    <li className=" text-[30px] text-slate-300 px-3 py-6"><TfiHarddrive />
                        <p className="text-[12px]">Map Network</p>
                        <p className=" text-[12px]">Drive</p>
                    </li>
                    <li className=" text-[30px] text-teal-600 px-3 py-6"><TfiLayoutMediaCenterAlt />
                        <p className="text-[12px] text-gray-300">Add a network</p>
                        <p className=" text-[12px] text-gray-300">location</p>
                    </li>
                </ul>
                <p className="text-zinc-400 md:pl-20 md:text-center md:mb-6 ">Network</p>
            </div>
            <div className="text-white md:text-center ml-4">
                <p className=" text-[40px] bg-blue-500 ml-2 mt-4 inline-block"><IoSettingsOutline /></p>
                <p className=" text-[12px]">Open</p>
                <p className=" text-[12px]">Settings</p>
            </div>
            <div className="">
                <ul className="border-r-[1.5px] border-gray-700 pt-3">
                    <li className="flex text-[25px] text-green-300 px-3"><MdAdUnits /><p className=" text-[12px] text-gray-300">Uninstall or change a program</p></li>
                    <li className="flex text-[25px] text-zinc-400 px-3"><MdSystemSecurityUpdateGood /><p className=" text-[12px]">System properties</p></li>
                    <li className="flex text-[25px] text-zinc-400 px-3"><RiContactsBook2Line /><p className=" text-[12px]">Manage</p></li>
                </ul>
                <p className="text-zinc-400 md:text-center mt-8 md:ml-20">System</p>
            </div>
        </div>
    )
}
export default NaveIteam;