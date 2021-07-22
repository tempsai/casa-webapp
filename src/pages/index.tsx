import { Box } from "@chakra-ui/react";
import Banner from "components/shared/Banner";
import SearchContainer from "components/discovery/SearchContainer";

const Home = () => {
  return (
    <Box mb={8}>
      <Banner
        header={"Find your happy place"}
        subheading={"Search properties for sale"}
      />
      <SearchContainer />
    </Box>
  );
};

export default Home;
