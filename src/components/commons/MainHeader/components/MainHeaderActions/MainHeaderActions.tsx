import React from "react";
import Button from "../../../Button";

const MainHeaderActions = () => {
  return (
    <div className="flex items-center">
      <Button rounded className="mr-3" color="black" variant="outlined">
        Sign In
      </Button>
      <Button rounded color="black">
        Register
      </Button>
    </div>
  );
};

export default MainHeaderActions;
