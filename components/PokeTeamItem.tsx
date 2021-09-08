import Image from "next/image";
import { FC, useRef, useState } from "react";
import {
  Badge,
  Heading,
  CloseButton,
  Box,
  Text,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  onDelete: () => void;
  name: string;
  pokeDetails: any;
};

export const PokeTeamItem: FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef();
  const infoToast = useToast();
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <Box>
        <Text fontSize="md" fontWeight="bold" textTransform="capitalize">
          {props.name}
        </Text>
        {props.pokeDetails.sprites.front_default && (
          <Image
            src={props.pokeDetails.sprites.front_default}
            width={50}
            height={50}
          />
        )}

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FontAwesomeIcon icon={faChevronCircleDown} />}
          >
            Options
          </MenuButton>
          <MenuList padding="0" overflow="hidden">
            <MenuItem
              minH="48px"
              minW="20px"
              onClick={() => {
                props.onDelete();
                infoToast({
                  title: "Pokemon removed from your team",
                  status: "info",
                  duration: 1000,
                });
              }}
            >
              <Text fontWeight="bold" textColor="red.500">
                Delete
              </Text>
            </MenuItem>
            <MenuItem minH="48px" minW="20px" ref={ref} onClick={onOpen}>
              <Text fontWeight="bold"> More Info</Text>
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Drawer to show details */}

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={ref}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Heading textTransform="capitalize">{props.name}</Heading>
            </DrawerHeader>
            <DrawerBody>
              <Text mb={5}>
                Height:{" "}
                <strong style={{ color: "green" }}>
                  {props.pokeDetails.height}
                </strong>
              </Text>
              <Image
                src={props.pokeDetails.sprites.front_default}
                width={100}
                height={100}
              />
              <Heading fontSize="2xl" mb="5">
                My Moves
              </Heading>
              <List>
                {props.pokeDetails.moves.length !== 0 ? (
                  props.pokeDetails.moves.map((m, key) => (
                    <ListItem key={key}>
                      <FontAwesomeIcon color="purple" icon={faCheckDouble} />
                      <Badge>{m.move.name}</Badge>
                    </ListItem>
                  ))
                ) : (
                  <Badge>I don&apos;t have any recorded movements 😰</Badge>
                )}
              </List>
            </DrawerBody>
            <DrawerFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Great
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </div>
  );
};
