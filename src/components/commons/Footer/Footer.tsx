import classNames from "classnames";
import { FunctionComponent, HTMLProps } from "react";
import Button from "../Button";
import Divider from "../Divider";
import IconButtton from "../IconButtton";
import List from "../List";
import ListItem from "../ListItem";
import Group from "./components/Group";

const Footer = () => {
  return (
    <footer>
      <Container className="gap-8 sm:flex-nowrap">
        <Group className="basis-[calc(50%-1rem)] sm:basis-1/6 sm:flex-shrink-0">
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
        <Group className="basis-[calc(50%-1rem)] sm:basis-1/6">
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
        <Group className="basis-[calc(50%-1rem)] sm:basis-1/6">
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
        <div className="basis-[calc(50%-1rem)] sm:basis-1/2">
          <Group>
            <Group.Header>About Reuters</Group.Header>
            <Group.Content>
              <List direction="vertical">
                <ListItem>
                  <Button variant="link" color="black" className="text-left">
                    About Reuters
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="link" color="black" className="text-left">
                    Careers
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="link" color="black" className="text-left">
                    Reuters News Agency
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="link" color="black" className="text-left">
                    Brand Attribution Guidelines
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="link" color="black" className="text-left">
                    Reuters Leadership
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="link" color="black" className="text-left">
                    Reuters Fact Check
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="link" color="black" className="text-left">
                    Reuters Diversity Report
                  </Button>
                </ListItem>
              </List>
            </Group.Content>
          </Group>
          <Group className="basis-[calc(50%-.5rem)] sm:basis-1/2">
            <Group.Header>Stay Informed</Group.Header>
            <Group.Content>
              <List direction="vertical">
                <ListItem>
                  <Button variant="link" color="black" className="text-left">
                    Download the App
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="link" color="black" className="text-left">
                    Newsletters
                  </Button>
                </ListItem>
              </List>
            </Group.Content>
          </Group>
        </div>
      </Container>
      <Container className="justify-between gap-4 md:gap-28">
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
      </Container>
    </footer>
  );
};

const Container: FunctionComponent<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => {
  const cl = classNames("p-4 mx-auto max-w-7xl flex flex-wrap", className);
  return (
    <>
      <Divider />
      <div className={cl}>{children}</div>
      <Divider />
    </>
  );
};

export default Footer;
