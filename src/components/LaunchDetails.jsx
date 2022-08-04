import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import * as API from "../services/launches";
import { ScaleFade } from "@chakra-ui/react";

export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log);
  }, [launchId]);

  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      {!launch ? (
        <div>cargando...</div>
      ) : (
        <>
          <Flex>
            <Text fontSize="2xl">
              Mision <strong>{launch.mission_name}</strong> (
              {launch.launch_year})
            </Text>
            <Spacer />
            <Tag
              p="5"
              size={"lg"}
              colorScheme={launch.launch_success ? "green" : "red"}
            >
              {launch.launch_success ? "Exitoso" : "Fallido"}
            </Tag>
          </Flex>

          <Button
            onClick={onToggle}
            mt="2"
            colorScheme="purple"
            variant="solid"
            width="sm"
          >
            description
          </Button>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="teal.500"
              rounded="md"
              shadow="md"
            >
              <Text>{launch.details !==null ? launch.details : "no cuenta con descipcion"}</Text>
            </Box>
          </ScaleFade>
          <Box>
            lanzamientos de los{" "}
            <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
              <Button mt="2" colorScheme='purple' variant='solid' >
                {launch.rocket?.rocket_name}
              </Button>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
}
