import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../../Navigation";
import Flag from "../../Translation";

type TMobileHeaderProps = {
  lang: string;
  currentRoute: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  navItems: Array<{ href: string; label: string }>;
};

function MobileHeader({
  lang,
  navItems,
  currentRoute,
  open,
  setOpen,
}: TMobileHeaderProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mobile-nav flex flex-col md:flex items-center uppercase gap-8"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Navigation
            navItems={navItems}
            lang={lang}
            currentRoute={currentRoute}
            flagComponents={<Flag currentRoute={currentRoute} lang={lang} />}
          />
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default MobileHeader;
