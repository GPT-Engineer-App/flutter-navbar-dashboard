import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaBell, FaSearch, FaUser, FaTachometerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.800" color="white" p={4}>
      <Flex alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto">
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Flex alignItems="center">
          <IconButton icon={<FaTachometerAlt />} aria-label="Dashboard" variant="ghost" colorScheme="teal" fontSize="20px" mx={2} />
          <IconButton icon={<FaSearch />} aria-label="Search" variant="ghost" colorScheme="teal" fontSize="20px" mx={2} />
          <IconButton icon={<FaBell />} aria-label="Notifications" variant="ghost" colorScheme="teal" fontSize="20px" mx={2} />
          <IconButton icon={<FaUser />} aria-label="Profile" variant="ghost" colorScheme="teal" fontSize="20px" mx={2} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
