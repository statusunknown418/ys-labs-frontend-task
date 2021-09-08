import { FC, RefObject } from "react";
import {
  AlertDescription,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogHeader,
  Button,
} from "@chakra-ui/react";

type Props = {
  modalOpen: boolean;
  itemRef: RefObject<HTMLDivElement>;
  onButtonClick: () => void;
  cancelRef: () => void;
};
export const AlertComponent: FC<Props> = (props) => {
  return (
    <AlertDialog
      isOpen={props.modalOpen}
      onClose={props.onButtonClick}
      leastDestructiveRef={props.itemRef}
    >
      <AlertDialogOverlay>
        <AlertDialogHeader>
          Sorry!! but you won&apos;t be able to add more Pokemons to your pocket
          😭
          <Button onClick={props.cancelRef}>Okay</Button>
        </AlertDialogHeader>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
