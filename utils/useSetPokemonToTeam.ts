import { useToast } from "@chakra-ui/toast";

type fn = () => void;
type args = {
  pokemonData: object;
  fnSetter: (...args) => void;
};
export const setToTeam = (pokemonData, fnModalSetter, userPokes, setFn) => {
  const toast = useToast();
  console.log("fn");
  let newPoke = pokemonData;
  let err2 = 0;
  userPokes.length === 0
    ? console.log("nothing to add")
    : userPokes.forEach((e) => {
        e.id === newPoke.id ? err2++ : console.log("alright");
      });

  err2 === 0 && setFn((prev) => [...prev, newPoke]);
  err2 === 0 &&
    toast({
      title: "Pokemon added to your team!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  err2 > 0 &&
    toast({
      title: "You already have this Pokemon",
      status: "error",
      duration: 1500,
      isClosable: true,
    });
  userPokes.length >= 5 && fnModalSetter(true);
};
