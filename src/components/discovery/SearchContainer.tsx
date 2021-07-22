import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectSearchBox,
  connectHits,
} from "react-instantsearch-dom";

import {
  Input,
  InputGroup,
  InputRightElement,
  Container,
  Wrap,
  WrapItem,
  Center,
  Box
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import PropertyCard from "./PropertyCard";
import { useDebounce } from "hooks/useDebounce";

interface SearchResults {
  objectID: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  medium_url: string;
}

interface SeachResults {
  hits: SearchResults[];
}

const searchClient = algoliasearch(
  "latency",
  process.env.NEXT_PUBLIC_ALGOLIA_KEY || ""
);

const SearchBox = ({ currentRefinement, isSearchStalled, refine }: any) => {
  //create a local state, that binds to the actual Input
  const [searchVal, setSearchVal] = useState("");
  const DELAY = 500
  //pass debounced searchVal back to algolia after 500ms delay
  refine(useDebounce(searchVal, DELAY));

  return (
    <form noValidate action="" role="search">
      <Container p="30" ml="auto" mr="auto">
        <InputGroup>
          <InputRightElement pointerEvents="none">
            {currentRefinement === "" && <SearchIcon color="gray.300" />}
          </InputRightElement>
          <Input
            size="md"
            aria-label="Find homes, e.g. 'Paris', '1 bedroom in New York"
            alignContent="center"
            type="search"
            value={searchVal}
            onChange={(event) => setSearchVal(event.currentTarget.value)}
            placeholder="e.g. 'Paris', '1 bedroom in New York'"
          />
        </InputGroup>
      </Container>
      {isSearchStalled ? "Please try searching again" : ""}
    </form>
  );
};

const CasaSearchBar = connectSearchBox(SearchBox);

const Results = ({ hits }: SeachResults) => {
  return hits.length === 0 ? (
    <Container p="30">
    <Center>No results for your query 😭 </Center>
    </Container>
  ) : (
    hits.map((hit: SearchResults) => (
        <WrapItem key={hit.objectID}>
          <Center ml="auto" mr="auto">
            <PropertyCard
              imageUrl={hit.medium_url}
              address={hit.address}
              bedrooms={hit.bedrooms}
              bathrooms={hit.bathrooms}
              price={hit.price}
            />
          </Center>
        </WrapItem>
    ))
  );
};

const CasaSearchResults = connectHits(Results);

const SearchContainer = () => (
  <Box>
  <InstantSearch indexName="airbnb" searchClient={searchClient}>
    <CasaSearchBar />
    <Wrap>
      <CasaSearchResults />
    </Wrap>
  </InstantSearch>
  </Box>
);

export default SearchContainer;
