"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProviderProps = {
  children: React.ReactNode;
};

function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="h-screen w-screen">
        <motion.div
          className="h-screen w-screen absolute bg-black rounded-b-[100px] z-40"
          initial={{ height: "0vh" }}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1, display: "block" }}
          animate={{ opacity: 0, display: "none" }}
          exit={{ opacity: 0, display: "none" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {pathname.substring(3).split("/")}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { deplay: 1 } }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
}

export default PageTransitionProvider;
