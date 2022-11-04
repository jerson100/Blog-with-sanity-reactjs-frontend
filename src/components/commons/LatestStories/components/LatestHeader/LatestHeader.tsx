import Button from "../../../Button";
import IconButtton from "../../../IconButtton";

const LatestHeader = () => {
  return (
    <div className="mb-4 flex justify-between">
      <ul className="flex gap-2">
        <li>
          <Button color="black" variant="contained" rounded>
            World
          </Button>
        </li>
        <li>
          <Button color="black" variant="outlined" rounded>
            Business
          </Button>
        </li>
        <li>
          <Button color="black" variant="outlined" rounded>
            Legal
          </Button>
        </li>
        <li>
          <Button color="black" variant="outlined" rounded>
            Breakingviews
          </Button>
        </li>
        <li>
          <Button color="black" variant="outlined" rounded>
            Technology
          </Button>
        </li>
        <li>
          <Button color="black" variant="outlined" rounded>
            Sports
          </Button>
        </li>
      </ul>
      <ul className="flex gap-2">
        <li>
          <Button color="black" variant="outlined" rounded>
            See all world
          </Button>
        </li>
        <li>
          <IconButtton
            color="black"
            variant="outlined"
            rounded
            svg="left"
            disabled
          />
        </li>
        <li>
          <IconButtton color="black" variant="outlined" rounded svg="right" />
        </li>
      </ul>
    </div>
  );
};

export default LatestHeader;
