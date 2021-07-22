import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";
import placeholder from '../../../public/placeholder.svg';

interface AddressProps {
  address: string;
}

interface AttributeProps {
  bedrooms: number;
  bathrooms: number;
}

interface PropertyProps extends AddressProps, AttributeProps {
  imageUrl: string;
  price: string;
}

const Address = ({ address }: AddressProps) => {
  return (
    <>
      <Box d="flex" alignItems="center">
        <Box as="span" mt="2" color="gray.600" fontSize="sm">
          {address}
        </Box>
      </Box>
    </>
  );
};

const Attributes = ({ bedrooms, bathrooms }: AttributeProps) => {
  return (
      <Box
        fontSize="md"
        fontWeight="semibold"
        as="span"
        lineHeight="tight"
        isTruncated
      >
        {bedrooms} bd, {bathrooms} ba
      </Box>
  );
};

const PropertyCard = ({
  imageUrl,
  bedrooms,
  bathrooms,
  address,
  price,
}: PropertyProps) => {
  return (
    <Flex
      p={55}
      w="sm"
      maxH="400px"
      cursor="pointer"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        as={'button'}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {/* TODO: progressively load images and use a placeholder to avoid jumping*/}
        {imageUrl && (
          <Image 
          src={imageUrl} 
          placeholder="blur"
          alt={`Picture of ${address}`} 
          roundedTop="lg" />
        )}
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {price && (
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                $ {price},000
              </Box>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="md"
              fontWeight="semibold"
              as="span"
              lineHeight="tight"
              isTruncated
            >
              <Attributes bedrooms={bedrooms} bathrooms={bathrooms} />
            </Box>
          </Flex>
          <Flex justifyContent="space-between" alignContent="center">
            {address && <Address address={address} />}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default PropertyCard;
