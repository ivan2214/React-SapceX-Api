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
    API.getLaunchByFlightNumber(launchId).then(setLaunch);
  }, [launchId]);

  return (
    <Box
      bg="gray.100"
      p={4}
      m={4}
      borderRadius="lg"
      display="flex"
      flexDirection="column"
    >
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
          {/* lanzamineots */}
          <Box display="flex" alignItems="center" justifyContent="start" flexDirection="row">
           <Text fontSize="xl">
           lanzamientos de los:{"  "}
           </Text>
            <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
              <Button colorScheme="purple" variant="solid" width="xs" ml="6">
                {launch.rocket?.rocket_name}
              </Button>
            </Link>
          </Box>
          {/* descrupcuon */}
          <Box display="flex" mt="4" alignItems="center" justifyContent="start" flexDirection="row">
          <Text fontSize="xl">
           descripcion del lanzamiento:{"  "}
           </Text>
            <Button
              onClick={onToggle}
              ml="6"
              colorScheme="purple"
              variant="solid"
              width="xs"
            >
              ver descripcion
            </Button>
            </Box>
           <Box mt="4">
           <ScaleFade initialScale={0.9} in={isOpen}>
              <Box
                p="40px"
                color="white"
               
                bg="teal.500"
                rounded="md"
                shadow="md"
                display="block" width="100%"
              >
                <Text>
                  {launch.details !== null
                    ? launch.details
                    : "no cuenta con descipcion"}
                </Text>
              </Box>
            </ScaleFade>
          
          </Box>
        </>
      )}
    </Box>
  );
}
