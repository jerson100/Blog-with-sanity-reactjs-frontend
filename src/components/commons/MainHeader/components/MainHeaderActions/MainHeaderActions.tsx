import React from "react";
import Button from "../../../Button";
import IconButtton from "../../../IconButtton";

interface MainHeaderActionsProps {
  handleShow: () => void;
}

const MainHeaderActions = ({ handleShow }: MainHeaderActionsProps) => {
  return (
    <div className="flex items-center ">
      <Button
        rounded
        className="mr-3 hidden md:block"
        color="black"
        variant="outlined"
      >
        Sign In
      </Button>
      <Button rounded color="black" className="hidden md:block">
        Register
      </Button>
      <IconButtton
        rounded
        color="black"
        svg="menu"
        className="md:hidden"
        onClick={handleShow}
      />
    </div>
  );
};

export default MainHeaderActions;
