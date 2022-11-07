import Button from "../Button";
import Divider from "../Divider";
import IconButtton from "../IconButtton";
import List from "../List";
import ListItem from "../ListItem";
import Group from "./components/Group";

const Footer = () => {
  return (
    <>
      <Divider />
      <div className="p-4 mx-auto max-w-7xl flex flex-wrap justify-between gap-4">
        <Group>
          <Group.Header>Latest</Group.Header>
          <Group.Content>
            <List>
              <ListItem>
                <Button variant="link" color="black">
                  Home
                </Button>
              </ListItem>
            </List>
          </Group.Content>
        </Group>
        <Group>
          <Group.Header>Browse</Group.Header>
          <Group.Content>
            <List direction="vertical">
              <ListItem>
                <Button variant="link" color="black">
                  World
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Business
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Legal
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Markets
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Breakingviews
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Technology
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Investigations
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  opens new tab
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Lifestyle
                </Button>
              </ListItem>
            </List>
          </Group.Content>
        </Group>
        <Group>
          <Group.Header>Media</Group.Header>
          <Group.Content>
            <List direction="vertical">
              <ListItem>
                <Button variant="link" color="black">
                  Videos
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Picture
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Graphics
                </Button>
              </ListItem>
            </List>
          </Group.Content>
        </Group>
        <Group>
          <Group.Header>About Reuters</Group.Header>
          <Group.Content>
            <List direction="vertical">
              <ListItem>
                <Button variant="link" color="black">
                  About Reuters
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Careers
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Reuters News Agency
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Brand Attribution Guidelines
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Reuters Leadership
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Reuters Fact Check
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="link" color="black">
                  Reuters Diversity Report
                </Button>
              </ListItem>
            </List>
          </Group.Content>
        </Group>
      </div>
      <Divider />
      <Divider />
      <div className="p-4 mx-auto max-w-7xl flex flex-wrap gap-4 md:gap-14">
        <Group className="md:basis-0 md:flex-grow">
          <Group.Header>Information you can trust</Group.Header>
          <Group.Content>
            <p className="text-sm">
              Reuters, the news and media division of Thomson Reuters, is the
              worlds largest multimedia news provider, reaching billions of
              people worldwide every day. Reuters provides business, financial,
              national and international news to professionals via desktop
              terminals, the world's media organizations, industry events and
              directly to consumers.
            </p>
          </Group.Content>
        </Group>
        <Group className="md:basis-0 md:flex-grow">
          <Group.Header>Follow Us</Group.Header>
          <Group.Content>
            <List>
              <ListItem>
                <IconButtton
                  rounded
                  svg="twitter"
                  variant="outlined"
                  color="neutral"
                />
              </ListItem>
              <ListItem>
                <IconButtton
                  rounded
                  svg="facebook"
                  variant="outlined"
                  color="neutral"
                />
              </ListItem>
              <ListItem>
                <IconButtton
                  rounded
                  svg="instagram"
                  variant="outlined"
                  color="neutral"
                />
              </ListItem>
              <ListItem>
                <IconButtton
                  rounded
                  svg="youtube"
                  variant="outlined"
                  color="neutral"
                />
              </ListItem>
              <ListItem>
                <IconButtton
                  rounded
                  svg="linkedin"
                  variant="outlined"
                  color="neutral"
                />
              </ListItem>
            </List>
          </Group.Content>
        </Group>
      </div>
      <Divider />
    </>
  );
};

export default Footer;
