import { IoIosRocket, IoMdCalendar } from "react-icons/io";
import { Box, Text, Flex, Tag, Spacer, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function LaunchItem(item) {
  return (
    <Box
      key={item.flight_number}
      bg="gray.600"
      color="gray.100"
      p="4"
      m="5"
      borderRadius="lg"
    >
      <Flex display="flex" alignItems="center" justifyContent="space-between">
        <Icon fontSize="3xl" as={IoIosRocket} mr="2" color="gray.900" />
        <Text fontSize="2xl">
          Mision: <strong>{item.mission_name}</strong> ({item.launch_year})
        </Text>
        <Spacer />
        <Tag
          p="5"
          textAlign="center"
          size={"lg"}
          bg={item.launch_success ? "green.300" : "red.300"}
          color="gray.100"
        >
          {item.launch_success ? "Exitoso" : "Fallido"}
        </Tag>
      </Flex>

      <Flex display="flex" alignItems="center" justifyContent="start">
        <Icon as={IoMdCalendar} color="gray.200" />
        <Text ml="2" color="gray.400">
          {item.launch_year}
        </Text>
      </Flex>
      <Flex display="flex" alignItems="center" justifyContent="start">
        <Link to={`/launch/${item.flight_number}`}>
          <Button mt="2" colorScheme="purple" variant="solid">
            Mas detalles
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
