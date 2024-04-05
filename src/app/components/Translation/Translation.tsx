import React from "react";
import Link from "next/link";
import { EN, LINK, VI } from "@/constants/common";

type Props = {
  currentRoute: string;
  lang: string;
  bgWhite?: boolean;
};

const Translation = ({ currentRoute, lang, bgWhite }: Props) => {
  const isViActive = lang === VI;
  const isEnActive = lang === EN;
  const textColor = bgWhite ? "text-grey-darker" : "text-white";
  const borderClass = `border-solid border-neutral-100 border-0 border-r-2 ${textColor}`;

  return (
    <div
      className="flex justify-between items-center uppercase translate-component"
    >
      <Link
        href={`/${LINK.VI}/${currentRoute}`}
        className={`pr-2 ${borderClass} ${isViActive ? "active" : ""}`}
      >
        <span className="hover:text-slate-300">Vi</span>
      </Link>
      <Link
        href={`/${LINK.EN}/${currentRoute}`}
        className={`pl-2 ${textColor} ${isEnActive ? "active" : ""}`}
      >
        <span className="hover:text-slate-300">En</span>
      </Link>
    </div>
  );
};

export default Translation;
