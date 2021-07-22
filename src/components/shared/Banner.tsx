import { Box, Text } from "@chakra-ui/layout";

interface BannerProps {
  header: string;
  subheading: string;
}
const Banner = ({ header, subheading }: BannerProps) => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Text as="b" fontSize="4xl">
        {header}
      </Text>
      <Text>{subheading} </Text>
    </Box>
  );
};

export default Banner;
