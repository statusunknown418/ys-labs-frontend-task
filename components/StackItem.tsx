import { FC } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
type Props = {
  title: string;
  desc: string;
};

export const StackItem: FC<Props> = ({ title, desc }) => {
  return (
    <Box
      cursor="pointer"
      p={5}
      shadow={"lg"}
      border={"1px"}
      borderColor="gray.200"
      rounded="lg"
      bg="orange.100"
    >
      <Heading fontSize={"lg"}>{title}</Heading>
      <Text mt={2}>{desc}</Text>
    </Box>
  );
};
