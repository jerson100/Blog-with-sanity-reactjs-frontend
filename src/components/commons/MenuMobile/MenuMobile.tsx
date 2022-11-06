import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import Divider from "../Divider";
import Items from "./components/Items";
import variants from "./menuMobile.variants";

interface MenuMobileProps {
  show: boolean;
}

const MenuMobile = ({ show }: MenuMobileProps) => {
  return (
    <>
      {createPortal(
        <AnimatePresence
          onExitComplete={() => {
            document.body.classList.remove("overflow-y-hidden");
          }}
        >
          {show && (
            <motion.div
              initial={"hidden"}
              animate={"show"}
              exit={"exit"}
              variants={variants.container}
              className="fixed top-[65px] left-0 w-full h-[calc(100vh-(4rem+1px))] z-40 bg-white overflow-y-auto overflow-x-hidden"
            >
              <motion.div variants={variants.buttons}>
                <div className="px-4 py-4 grid grid-cols-2 gap-4">
                  <div>
                    <Button
                      variant="outlined"
                      rounded
                      className="w-full"
                      color="black"
                    >
                      Sign In
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      rounded
                      className="w-full"
                      color="black"
                    >
                      Register
                    </Button>
                  </div>
                </div>
                <Divider />
              </motion.div>
              {values.map((d: Item, i: number) => (
                <motion.div
                  variants={variants.items}
                  custom={i % 2 == 0 ? 1 : -1}
                  key={d.title}
                >
                  <Items divider>
                    <Items.Title>{d.title}</Items.Title>
                    <Items.List>
                      {d.items.map((item: ItemProps) => (
                        <Items.Item key={item.name} url={item.to}>
                          {item.name}
                        </Items.Item>
                      ))}
                    </Items.List>
                  </Items>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

interface ItemProps {
  name: string;
  to: string;
}

class Item {
  title: string;
  items: ItemProps[];
  constructor(title: string, items: ItemProps[]) {
    this.title = title;
    this.items = items;
  }
}

const values: Item[] = [
  new Item("JavaScript", [
    { name: "dom", to: "/Dom" },
    { name: "axios", to: "/Axios" },
    { name: "algoritmos", to: "/Algoritmos" },
  ]),
  new Item("World", [
    { name: "Africa", to: "/Africa" },
    { name: "Americas", to: "/Americas" },
    { name: "China", to: "/Algoritmos" },
    { name: "Europe", to: "/Algoritmos" },
    { name: "India", to: "/Algoritmos" },
    { name: "Middle East", to: "/Algoritmos" },
    { name: "United Kingdom", to: "/Algoritmos" },
    { name: "United States", to: "/Algoritmos" },
    { name: "U.S. Midterms", to: "/Algoritmos" },
    { name: "Reuters Next", to: "/Algoritmos" },
  ]),
  new Item("Business", [
    { name: "Aerospace & Defense", to: "/Africa" },
    { name: "Autos & Transportation", to: "/Americas" },
    { name: "COP27", to: "/Algoritmos" },
    { name: "Energy", to: "/Algoritmos" },
    { name: "Environment", to: "/Algoritmos" },
    { name: "Finance", to: "/Algoritmos" },
    { name: "Healthcare & Pharmaceuticals", to: "/Algoritmos" },
    { name: "Media & Telecom", to: "/Algoritmos" },
    { name: "Retail & Consumer", to: "/Algoritmos" },
    { name: "Sustainable Business", to: "/Algoritmos" },
    { name: "Charged", to: "/Algoritmos" },
    { name: "Future of Health", to: "/Algoritmos" },
    { name: "Future of Money", to: "/Algoritmos" },
    { name: "Take Five", to: "/Algoritmos" },
    { name: "Reuters Impact", to: "/Algoritmos" },
    { name: "World at Work", to: "/Algoritmos" },
  ]),
  new Item("Legal", [
    { name: "Government", to: "/Africa" },
    { name: "Legal Industry", to: "/Americas" },
    { name: "Litigation", to: "/Algoritmos" },
    { name: "Transactional", to: "/Algoritmos" },
  ]),
  new Item("Sports", [
    { name: "World Cup 2022", to: "/Africa" },
    { name: "Athletics", to: "/Americas" },
    { name: "Cricket", to: "/Algoritmos" },
    { name: "Cycling", to: "/Algoritmos" },
    { name: "Golf", to: "/Algoritmos" },
    { name: "Motor Sports", to: "/Algoritmos" },
    { name: "Soccer", to: "/Algoritmos" },
    { name: "Tennis", to: "/Algoritmos" },
  ]),
];

export default MenuMobile;
