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
  Grid,
  ListIcon,
  Flex,
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
    <Grid
      placeItems="center"
      bgColor="purple.400"
      p="5"
      rounded="lg"
      color="white"
    >
      <Heading fontSize="lg" fontWeight="extrabold" textTransform="capitalize">
        {props.name}
      </Heading>
      {props.pokeDetails.sprites && (
        <Image
          src={props.pokeDetails.sprites.front_default}
          width={50}
          height={50}
        />
      )}

      <Menu>
        <MenuButton
          bgColor="purple.800"
          fontSize="sm"
          as={Button}
          rightIcon={<FontAwesomeIcon icon={faChevronCircleDown} />}
          _hover={{ bgColor: "purple" }}
        >
          Options
        </MenuButton>
        <MenuList padding="0" overflow="hidden" bgColor="purple.900">
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
            <Text
              fontWeight="bold"
              textColor="red.300"
              _hover={{ color: "#ff0000" }}
            >
              Delete
            </Text>
          </MenuItem>
          <MenuItem
            minH="48px"
            minW="20px"
            ref={ref}
            onClick={onOpen}
            _hover={{ color: "black" }}
          >
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
        <DrawerContent bg="whiteAlpha.900">
          <DrawerHeader>
            <Heading textTransform="capitalize">{props.name}</Heading>
          </DrawerHeader>
          <DrawerBody>
            <Flex>
              <Heading fontSize="lg" mr="2">
                Base XP:
              </Heading>
              <Heading color="purple.600" fontSize="lg">
                {props.pokeDetails.base_experience}
              </Heading>
            </Flex>
            <Flex my={5}>
              <Heading fontSize="lg" mr="2">
                Height:{" "}
              </Heading>
              <Heading fontSize="lg" color="blue.500">
                {props.pokeDetails.height}m
              </Heading>
            </Flex>
            {props.pokeDetails.sprites && (
              <Image
                src={props.pokeDetails.sprites.front_default}
                width={100}
                height={100}
              />
            )}
            <Heading fontSize="2xl">My Abilities</Heading>
            <Flex flexWrap="wrap" my="3">
              {props.pokeDetails.abilities.length > 0 ? (
                props.pokeDetails.abilities.map((a) => (
                  <Badge key={a.slot} colorScheme="purple" m="2">
                    {a.ability.name}
                  </Badge>
                ))
              ) : (
                <Badge>I don&apos;t have any recorded abilities 😰</Badge>
              )}
            </Flex>

            <Heading fontSize="2xl" mb="5">
              My Moves
            </Heading>
            <List>
              {props.pokeDetails.moves.length > 0 ? (
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
    </Grid>
  );
};
