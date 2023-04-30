'use client';
import { useState } from "react";
/* import NavigationItems from "./NavLinks"; */
import { Modal } from "antd";
import Link from "next/link";
import { Down, Search, Mail, FB, Insta, Twitter } from "../Icons";
import { customlinks } from "../navbar/MyLinks";
import CustomSearch from "../search/page";
import "./Navbar.css";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { SET_LANG } from "../../../redux/Features/Language/LanguageSlice";

const NavbarWhite = () => {
  const dispatch = useDispatch()
  const pathname = usePathname();
  const {lang} = useSelector((state) => state?.language)
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  // const [isHome, setIsHome] = useState(false);
  const [toogleSubmenu, setToogleSubmenu] = useState("");
  const HamburgerLine1 = `h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-500 m-4`;
  const HamburgerLine2 = `h-1 w-7 my-1 rounded-full bg-white transition ease transform duration-500 m-4 float-right`;
  
  const handleSearch = (bool) => {
    setSearch(bool);
  }
  console.log(search);

  return (
    <div
      id="Navbar"
      className="w-full absolute top-0 bg-transparent z-[998] overflow-hidden"
    >
      <nav className="bg-transparent text-white relative lg:px-30">
        <div className="flex justify-between pt-5">
          <Link href={"./"}>
            <div className="flex justify-center items-center text-xl text-center font-bold cursor-pointer pl-4 xl:pl-0">
              QUADQUE
            </div>
          </Link>
          <div className="hidden lg:block">
            <div className="flex gap-5">
              <div className="flex items-center text-xs">
                <Mail className="mr-2 text-white" />
                info@quadque.tech
              </div>
              <div className="flex items-center text-xs ">
                <Mail className="mr-2 text-white" />
                Sunday to Thursday 8 AM to 5 PM
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-5 font-semibold text-gray-400 pr-5 lg:pr-0">
                <div
                  onClick={() => {
                    dispatch(SET_LANG("eng"));
                  }}
                  className={`${
                    lang === "eng" && "text-white duration-700"
                  } cursor-pointer`}
                >
                  EN
                </div>
                <div
                  onClick={() => {
                    dispatch(SET_LANG("ban"));
                  }}
                  className={`${
                    lang === "ban" && "text-white duration-700"
                  } cursor-pointer`}
                >
                  BN
                </div>
              </div>
              <CustomSearch search={search} handleSearch={handleSearch} />
              <div
                onClick={() => {
                  handleSearch(true);
                }}
                className="flex justify-center items-center text-xl text-center font-bold"
              >
                <Search className="text-white cursor-pointer" />
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex">
                <Link href={"https://www.facebook.com/"}>
                  <FB className="text-xl mx-3 text-white hover:text-sky-500 cursor-pointer" />
                </Link>
                <Link href={"https://www.instagram.com/"}>
                  <Insta className="text-xl mx-3 text-white hover:text-pink-600 cursor-pointer" />
                </Link>
                <Link href={"https://twitter.com/"}>
                  <Twitter className="text-xl mx-3 text-white hover:text-sky-500 cursor-pointer" />
                </Link>
              </div>
            </div>

            <div className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
              <div className={`${HamburgerLine1}`} />
              <div className={`${HamburgerLine2}`} />
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-transparent text-white relative lg:px-30">
        <div className={`hidden lg:block ${pathname === "/user" && "lg:hidden"}`}>
          <div className="flex justify-evenly">
            {customlinks?.map((link, i) => (
                  <div key={i}>
                    <div
                      key={i}
                      className="py-4 flex justify-between items-center"
                      onClick={() => {
                        toogleSubmenu !== link?.name
                          ? setToogleSubmenu(link?.name)
                          : setToogleSubmenu("");
                      }}
                    >
                      <a className="text-white hover:text-gray-300 duration-500" href={link?.link}>
                        {link.name}
                      </a>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className="flex justify-end pt-5">
          {/* <Link href={"./"}>
            <div className="flex justify-center items-center text-xl text-center font-bold cursor-pointer pl-4 xl:pl-0">
              QUADQUE
            </div>
          </Link> */}
          {/* <div className="flex justify-between items-center gap-2">
            <div className="flex gap-5 font-semibold text-gray-400 pr-5 lg:pr-0">
              <div
                onClick={() => {
                  dispatch(SET_LANG("eng"));
                }}
                className={`${
                  lang === "eng" && "text-white duration-700"
                } cursor-pointer`}
              >
                EN
              </div>
              <div
                onClick={() => {
                  dispatch(SET_LANG("ban"));
                }}
                className={`${
                  lang === "ban" && "text-white duration-700"
                } cursor-pointer`}
              >
                BN
              </div>
            </div>
            <CustomSearch search={search} handleSearch={handleSearch} />
            <div
              onClick={() => {
                handleSearch(true);
              }}
              className="flex justify-center items-center text-xl text-center font-bold"
            >
              <Search className="text-white cursor-pointer" />
            </div>
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
              <div className={`${HamburgerLine1}`} />
              <div className={`${HamburgerLine2}`} />
            </div>
          </div> */}
          {/* Hamburger Animation end*/}
          {/* <ul className="hidden lg:visible lg:flex items-center gap-8">
            <NavigationItems />
          </ul> */}
          {/* Mobile View */}
          <Modal
            className="NavbarWhiteModal bg-black bg-opacity-50 backdrop:filter backdrop-blur-sm border border-gray-500 rounded-md sm:float-right cross_btn"
            title={false}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            footer={false}
            /* width="100%" */
          >
            <div className="w-full h-[95vh] flex flex-col text-xl py-10 pl-10">
              {customlinks?.map((link, i) => (
                <div key={i}>
                  <div
                    key={i}
                    className="pt-4 flex justify-between items-center"
                    onClick={() => {
                      toogleSubmenu !== link?.name
                        ? setToogleSubmenu(link?.name)
                        : setToogleSubmenu("");
                    }}
                  >
                    <a className="text-white" href={link?.link}>
                      {link.name}
                    </a>
                    <div className={`${link?.submenu ? "block" : "hidden"}`}>
                      <Down
                        className={`text-white text-sm ${
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

export default NavbarWhite;
