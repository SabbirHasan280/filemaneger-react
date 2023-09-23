import React from "react";
import { GiFlexibleStar } from "react-icons/gi";
import { BsFillFileEarmarkEaselFill } from "react-icons/bs";
import { ImOnedrive } from "react-icons/im";
import { IoDesktop } from "react-icons/io5";
import { SiHackthebox } from "react-icons/si";
import { CgFileDocument } from "react-icons/cg";
import { IoMdDownload } from "react-icons/io";
import { SlMusicTone } from "react-icons/sl";
import { AiFillPicture } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { ImDrive } from "react-icons/im";
import { AiOutlineDown } from "react-icons/ai";
import { FcOpenedFolder } from "react-icons/fc";

const AllDrive = () => {
    return (
        <div className="all_drive flex text-white">
            <div className="drive_left md:w-[20%] bg-zinc-900 h-screen">
                <button className="text-[10px] md:text-[14px] px-4 py-1 flex items-center cursor-pointer mt-5 mb-[15px] hover:bg-neutral-500 w-full">
                    <span className="text-blue-400 inline-block mr-3 md:text-[20px]"><GiFlexibleStar /></span>
                    <span>Quick access</span>
                </button>
                <button className="text-[10px] md:text-[14px] px-4 py-1 flex items-center cursor-pointer mb-[15px] hover:bg-neutral-500 w-full">
                    <span className="text-yellow-400 inline-block mr-3 md:text-[20px]"><BsFillFileEarmarkEaselFill /></span>
                    <span>Creative Cloud Files</span>
                </button>
                <button className="text-[10px] md:text-[14px] px-4 py-1 flex items-center cursor-pointer mb-[15px] hover:bg-neutral-500 w-full">
                    <span className=" text-blue-600 inline-block mr-3 text-[20px]"><ImOnedrive /></span>
                    <span>OneDrive</span>
                </button>
                <button className="text-[10px] md:text-[14px] px-4 py-1 flex items-center cursor-pointer mb-5 hover:bg-neutral-500 w-full">
                    <span className=" text-blue-400 inline-block mr-3 md:text-[20px]"><IoDesktop /></span>
                    <span>This PC</span>
                </button>

                <ul className=" ml-10 md:ml-12 text-[12px] md:text-[15px]">
                    <li className="mb-3 cursor-pointer">
                        <span className=" text-blue-400 inline-block mr-3"><SiHackthebox /></span>3D Object
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className="text-blue-600 inline-block mr-3"><IoDesktop /></span>
                        Desktop
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className=" text-cyan-200 inline-block mr-3"><CgFileDocument /></span>
                        Documents
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className="text-blue-600 inline-block mr-3"><IoMdDownload /></span>
                        Downloads
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className="text-blue-600 inline-block mr-3"><SlMusicTone /></span>
                        Music
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className=" text-cyan-300 inline-block mr-3"><AiFillPicture /></span>
                        Picture
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className=" text-cyan-400 inline-block mr-3"><MdOndemandVideo /></span>
                        Videos
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className=" text-slate-500 inline-block mr-3"><ImDrive /></span>
                        Local Disk(c:)
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className="text-neutral-500 inline-block mr-3"><ImDrive /></span>
                        Software(D:)
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className="text-neutral-500 inline-block mr-3"><ImDrive /></span>
                        Video(E:)
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className="text-neutral-500 inline-block mr-3"><ImDrive /></span>
                        Asad(F:)
                    </li>
                    <li className="mb-3 cursor-pointer">
                        <span className=" text-zinc-400 inline-block mr-3"><ImDrive /></span>
                        Work(G:)
                    </li>
                </ul>
                <button className="text-[10px] md:text-[14px] px-4 py-1 flex items-center cursor-pointer mt-5 mb-6 hover:bg-neutral-500 w-full">
                    <span className=" text-blue-400 inline-block mr-3 md:text-[20px]"><IoDesktop /></span>
                    <span>Network</span>
                </button>
            </div>

            <div className="drive_right w-[80%] md:h-screen bg-black ">
                <div className=" mt-6 ml-5 text-zinc-300">
                    <h1 className=" flex items-center text-slate-200 font-semi-bold"><p className=" opacity-70"><AiOutlineDown /></p>Folder (7)</h1>
                </div>
                <div className=" mt-6">
                    <ul className="ml-10 text-[12px] sm:flex flex-wrap">
                        <li className=" flex mr-28">
                            <span className=" text-[70px] relative md:mr-4"><FcOpenedFolder /></span>
                            <span className="text-[40px] text-blue-400 absolute ml-10 mt-6"><SiHackthebox /></span>
                            3D Objects
                        </li>
                        <li className="flex mr-28">
                            <span className="text-[70px] md:mr-4"><FcOpenedFolder /></span>
                            <span className="text-[40px] text-blue-600 absolute ml-10 mt-6"><IoDesktop /></span>
                            Desktop
                        </li>
                        <li className="flex mr-28">
                            <span className="text-[70px] md:mr-4"><FcOpenedFolder /></span>
                            <span className="text-[40px] text-cyan-200 absolute ml-10 mt-6"><CgFileDocument /></span>
                            Document
                        </li>
                        <li className="flex mr-28">
                            <span className="text-[70px] md:mr-4"><FcOpenedFolder /></span>
                            <span className="text-[40px] text-blue-600 absolute ml-10 mt-6"><IoMdDownload /></span>
                            Downloads
                        </li>
                        <li className="flex mr-36 sm:mt-">
                            <span className="text-[70px] md:mr-4"><FcOpenedFolder /></span>
                            <span className="text-[40px] text-blue-600 absolute ml-10 mt-6"><SlMusicTone /></span>
                            Music
                        </li>
                        <li className="flex mr-28 sm:mt-">
                            <span className="text-[70px] md:mr-4"><FcOpenedFolder /></span>
                            <span className="text-[40px] text-cyan-300 absolute ml-10 mt-6"><AiFillPicture /></span>
                            Picture
                        </li>
                        <li className="flex sm:mt-">
                            <span className=" text-slate-700 text-[70px] md:mr-4"><FcOpenedFolder /></span>
                            <span className="text-[40px] text-blue-600 absolute ml-10 mt-6"><MdOndemandVideo /></span>
                            Videos
                        </li>
                    </ul>
                </div>

                <div className=" mt-6 ml-5 text-zinc-300">
                    <h1 className=" flex items-center text-slate-200 font-semi-bold"><p className=" opacity-70"><AiOutlineDown /></p>Devices and drives (5) (7)</h1>
                </div>
                <div className="main text-white w-full flex flex-wrap mt-10">
                    <div className=" w-[21.5%]">
                        <p className=" ml-10 text-[14px]">Local Disk (C:)</p>
                        <div className=" w-full flex items-center">
                            <span className=" text-white text-[30px] mr-1.5"><ImDrive /></span>
                            <div className=" bg-[#26A0DA] w-[50%] h-4"></div>
                            <div className=" bg-white w-[50%] h-4"></div>
                        </div>
                        <p className=" ml-10 text-[14px]">62.8 GB free of 130 GB</p>
                    </div>
                    <div className=" w-[22%] ml-10">
                        <p className=" ml-10 text-[14px]">Local Disk (C:)</p>
                        <div className=" w-full flex items-center">
                            <span className=" text-white text-[30px] mr-1.5"><ImDrive /></span>
                            <div className=" bg-[#26A0DA] w-[10%] h-4"></div>
                            <div className=" bg-white w-[90%] h-4"></div>
                        </div>
                        <p className=" ml-10 text-[14px]">62.8 GB free of 130 GB</p>
                    </div>
                    <div className=" w-[22%] ml-10">
                        <p className=" ml-10 text-[14px]">Local Disk (C:)</p>
                        <div className=" w-full flex items-center">
                            <span className=" text-white text-[30px] mr-1.5"><ImDrive /></span>
                            <div className=" bg-[#26A0DA] w-[30%] h-4"></div>
                            <div className=" bg-white w-[70%] h-4"></div>
                        </div>
                        <p className=" ml-10 text-[14px]">62.8 GB free of 130 GB</p>
                    </div>
                    <div className=" w-[23%] ml-10">
                        <p className=" ml-10 text-[14px]">Local Disk (C:)</p>
                        <div className=" w-full flex items-center">
                            <span className=" text-white text-[30px] mr-1.5"><ImDrive /></span>
                            <div className=" bg-[#26A0DA] w-[20%] h-4"></div>
                            <div className=" bg-white w-[80%] h-4"></div>
                        </div>
                        <p className=" ml-10 text-[14px]">62.8 GB free of 130 GB</p>
                    </div>
                    <div className=" w-[23%]">
                        <p className=" ml-10 text-[14px]">Local Disk (C:)</p>
                        <div className=" w-full flex items-center">
                            <span className=" text-white text-[30px] mr-1.5"><ImDrive /></span>
                            <div className=" bg-[#26A0DA] w-[70%] h-4"></div>
                            <div className=" bg-white w-[30%] h-4"></div>
                        </div>
                        <p className=" ml-10 text-[14px]">62.8 GB free of 130 GB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllDrive;