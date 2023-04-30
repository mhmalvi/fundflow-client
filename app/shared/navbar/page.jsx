'use client';
import { useState } from "react";
/* import NavigationItems from "./NavLinks"; */
import { Modal } from "antd";
import Link from "next/link";
import { Down, Search } from "../Icons";
import CustomSearch from "../search/page";
import { customlinks } from "./MyLinks";
import "./Navbar.css";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { SET_LANG } from "../../../redux/Features/Language/LanguageSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const {lang} = useSelector((state) => state?.language)
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  // const [isHome, setIsHome] = useState(false);
  const [toogleSubmenu, setToogleSubmenu] = useState("");
  const pathname = usePathname()
  const HamburgerLine1 = `h-1 w-10 my-1 rounded-full bg-black transition ease transform duration-500 m-4`;
  const HamburgerLine2 = `h-1 w-7 my-1 rounded-full bg-black transition ease transform duration-500 m-4 float-right`;

  const handleSearch = (bool) => {
    setSearch(bool);
  };
  console.log("pathname",pathname);

  return (
    <div
      id="Navbar"
      className="w-full absolute top-0 bg-transparent z-40 overflow-hidden"
    >
      <nav className="bg-transparent text-black relative max-w-[1280px] mx-auto">
        <div className="flex justify-between pt-5 pb-13">
          <Link href={"./"}>
            <div
              className={`${(pathname === "/learnPayment") && "lg:text-white"} ${(pathname === "/login") && "lg:text-white"} ${(pathname === "/payment") && "lg:text-white"} ${pathname==="/profile" && "lg:hidden"} flex justify-center items-center text-xl text-center font-bold cursor-pointer pl-4 xl:pl-0`}
            >
              QUADQUE
            </div>
          </Link>
          <div className="flex justify-between items-center gap-2 ">
            <div className="flex gap-5 font-semibold text-gray-400 pr-5 lg:pr-0">
              <div onClick={()=> {dispatch(SET_LANG("eng"))}} className={`${lang === "eng" && "text-black duration-700"} cursor-pointer`}>EN</div>
              <div onClick={()=> {dispatch(SET_LANG("ban"))}} className={`${lang === "ban" && "text-black duration-700"} cursor-pointer`}>BN</div>
            </div>
            <CustomSearch search={search} handleSearch={handleSearch} />
            <div
              onClick={() => {
                handleSearch(true);
              }}
              className="flex justify-center items-center text-xl text-center font-bold"
            >
              <Search className="text-black cursor-pointer" />
            </div>
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
              {/* Hamburger Animation */}
              <div className={` ${HamburgerLine1}`} />
              <div className={`${HamburgerLine2}`} />
            </div>
          </div>
          {/* Hamburger Animation end*/}
          {/* <ul className="hidden lg:visible lg:flex items-center gap-8">
            <NavigationItems />
          </ul> */}
          {/* Mobile View */}
          <Modal
            className="NavbarModal bg-white bg-opacity-80 backdrop:filter backdrop-blur-sm border rounded-md sm:float-right cross_btn"
            title={false}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            footer={false}
          >
            <div className="w-full h-[95vh] flex flex-col text-black text-xl py-10 pl-10">
              {customlinks?.map((link, i) => (
                <div key={i}>
                  <div
                    key={i}
                    className="flex justify-between items-center py-4"
                    onClick={() => {
                      toogleSubmenu !== link?.name
                        ? setToogleSubmenu(link?.name)
                        : setToogleSubmenu("");
                    }}
                  >
                    <a
                      className="text-black hover:text-home-color"
                      href={link?.link}
                    >
                      {link.name}
                    </a>
                    <div className={`${link?.submenu ? "block" : "hidden"}`}>
                      <Down
                        className={`text-black text-sm ${
                          toogleSubmenu === "" && "-rotate-90"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    {link?.submenu !== "" && (
                      <div
                        className={`${
                          toogleSubmenu === link.name ? "" : "hidden"
                        }`}
                      >
                        {link.submenu?.map((slink, i) => (
                          <Link
                            key={i}
                            href={slink.sublink}
                            onClick={() => {
                              setOpen(false);
                              setToogleSubmenu("");
                            }}
                          >
                            <div className="py-6 pl-10">{slink.name}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Modal>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
