import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AccessibleLink from "components/shared/AccessibleLink";


export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <AccessibleLink href="/">🏠 Casa</AccessibleLink>
        <Text>{`© ${new Date().getFullYear()} Sai Karthik Siddulugari`}</Text>
        <Stack direction={"row"} spacing={6}></Stack>
      </Container>
    </Box>
  );
}
