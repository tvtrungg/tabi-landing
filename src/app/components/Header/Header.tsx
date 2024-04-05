"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa6";
import Navigation from "../Navigation";
import Translation from "../Translation";
import useGetPath from "../../../../lib/useGetPath";
import Image from "next/image";
import "./Header.css";
import MobileHeader from "./MobileHeader";

type THeaderProps = {
  lang: string;
};

function Header({ lang }: THeaderProps) {
  const t = useTranslations("container");
  let currentRoute = useGetPath().splice(2).join("/");
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [bgWhite, setBgWhite] = useState(false);
  const { scrollY } = useScroll();

  const navItems = [
    { href: ``, label: t("header.nav1") },
    { href: `about`, label: t("header.nav2") },
    { href: `services`, label: t("header.nav3") },
    { href: `contact`, label: t("header.nav4") },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 500) {
      setBgWhite(true);
    } else {
      setBgWhite(false);
    }
  });

  const hideTimeout = useRef<any>(null);

  useEffect(() => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    hideTimeout.current = setTimeout(() => {
      if (!hidden && scrollY.get() > 150 && !open) {
        setHidden(true);
      }
    }, 3000);

    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, [hidden, open, scrollY]);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }

    return () => {
      document.body.style.overflowY = "visible";
    };
  }, [open]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-110%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full text-lg backdrop-blur-sm z-20 ${
        bgWhite ? "bg-white shadow-lg" : "bg-[#00000003]"
      }
      ${open && "bg-[#00000076]"}
      `}
    >
      <div
        className={`nav-menu xs:max-w-screen-xs 2xs:max-w-screen-2xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-4 ${
          bgWhite ? "nav-menu-transparent" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <Image
            src="/logo/logo-125x78.svg"
            alt="Tabi Logo"
            width={96}
            height={60}
            priority
          />
          <ul className="hidden md:flex justify-center items-center gap-10">
            <Navigation
              navItems={navItems}
              lang={lang}
              currentRoute={currentRoute}
              flagComponents={
                <Translation
                  bgWhite={bgWhite}
                  currentRoute={currentRoute}
                  lang={lang}
                />
              }
              bgWhite={bgWhite}
            />
          </ul>
          <FaBars
            className="text-2xl md:hidden text-white cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <MobileHeader
          lang={lang}
          navItems={navItems}
          currentRoute={currentRoute}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </motion.header>
  );
}

export default Header;
