import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface MenuMobileProps {
  show: boolean;
}

const MenuMobile = ({ show }: MenuMobileProps) => {
  return (
    <>
      {createPortal(
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0" }}
              exit={{ x: "100%" }}
              className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-amber-500 z-40"
            ></motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default MenuMobile;
