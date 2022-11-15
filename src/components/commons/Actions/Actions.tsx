import IconButtton from "../IconButtton";
import List from "../List";
import ListItem from "../ListItem";

const Actions = () => {
  return (
    <List direction="vertical">
      <ListItem>
        <IconButtton variant="outlined" svg="share" color="neutral" rounded />
      </ListItem>
      <ListItem>
        <IconButtton variant="outlined" svg="save" color="neutral" rounded />
      </ListItem>
    </List>
  );
};

export default Actions;
