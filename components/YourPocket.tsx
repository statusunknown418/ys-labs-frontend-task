import { FC, useRef, useState } from "react";
import { Button, Heading, Text, Flex, Grid, Box } from "@chakra-ui/react";
import { AlertComponent } from "./AlertComponent";
import { PokeTeamItem } from "./PokeTeamItem";
type Props = {
  fnSetPokes: (...args) => void;
  dataUserPokes: any[];
};

export const YourPocket: FC<Props> = ({ fnSetPokes, dataUserPokes }) => {
  return (
    <Grid gap={5}>
      <Box p="5" rounded="lg" bgColor="#343d64" color="white">
        <Heading fontSize="2xl" color="white" fontWeight="extrabold" mb={2}>
          Your Team!
        </Heading>
        <Text mb="4">
          Add up to <span style={{ fontWeight: "bolder" }}>6</span> pokemons to
          your list
        </Text>
        <Button
          colorScheme="red"
          fontSize="sm"
          onClick={() => {
            fnSetPokes([]);
          }}
        >
          Delete All
        </Button>
      </Box>
      <Grid
        templateColumns="repeat(2,1fr)"
        p={10}
        bg="purple.500"
        rounded="lg"
        placeItems="center"
        gap={5}
        minW="200px"
        maxW="xl"
        minHeight="sm"
      >
        {dataUserPokes.length === 0 && (
          <Heading gridColumn="1 / span 2" p={5} color="blackAlpha.600">
            You don&apos;t have any Pokemons in your team yet
          </Heading>
        )}
        {/* Current User Pokemons */}
        {dataUserPokes &&
          dataUserPokes.map((p, key) => (
            <div key={key}>
              <PokeTeamItem
                pokeDetails={p}
                name={p.name}
                onDelete={() =>
                  fnSetPokes(dataUserPokes.filter((u2) => u2.id !== p.id))
                }
              />
            </div>
          ))}
        {/* ------------------------------ */}
      </Grid>
    </Grid>
  );
};
