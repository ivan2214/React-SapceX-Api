import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
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

  const sitio = launch.launch_site;
  var nombreSitio;
  for (let key in sitio) {
    nombreSitio = sitio.site_name_long;
  }

  var razon = launch.launch_failure_details;
  var razonDetalle;
  for (const key in razon) {
    razonDetalle = razon.reason;
  }
  console.log(razonDetalle);

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId).then(setLaunch);
  }, [launchId]);

  return (
    <>
      <Heading as="h1" size="xl" m="4">
        <Text fontSize="5xl" color="gray.200">
          SpaceX informacion
        </Text>
      </Heading>
      <Box
        bg="gray.600"
        p={4}
        m={4}
        borderRadius="lg"
        display="flex"
        flexDirection="column"
        alignItems="space-between"
        justifyContent="center"
        color="gray.100"
      >
        {!launch ? (
          <div>cargando...</div>
        ) : (
          <>
            {/* nombre miision y lanzamiento */}
            <Flex
              mb="2"
              display="flex"
              alignItems="center"
              justifyContent="start"
              flexDirection="row"
            >
              <Text fontSize="3xl" textTransform="uppercase">
                Mision <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
              <Spacer />
              <Tag
                p="5"
                size={"size"}
                bg={launch.launch_success ? "green.300" : "red.300"}
                color="gray.100"
              >
                {launch.launch_success ? "Exitoso" : "Fallido"}
              </Tag>
            </Flex>

            {/* sitio */}

            <Box
              display="flex"
              mb="4"
              alignItems="center"
              justifyContent="start"
              flexDirection="row"
            >
              <Text fontSize="xl">
                Sitio de donde fue lanzado : <strong>{nombreSitio}</strong>
              </Text>
            </Box>

            {/* fails */}

            <Box
              display="flex"
              mb="4"
              alignItems="center"
              justifyContent="start"
              flexDirection="row"
            >
              <Text fontSize="xl">
                {launch.launch_success == true ? (
                  <Text color="green.300">No hubo fallas en el cohete</Text>
                ) : (
                  // <Text color="red.300">razon del fallo : {razonDetalle}</Text>
                  <Text color="red.300">
                    {launch?.launch_failure_details ? (
                      <strong >
                        Razon del fallo : <Text display="inline-block" color="red.300">{razonDetalle.toUpperCase()}</Text>{" "}
                      </strong>
                    ) : (
                      " No cuenta con descripcion del fallo"
                    )}
                  </Text>
                )}
              </Text>
            </Box>

            {/* lanzamineots */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="start"
              flexDirection="row"
              mt="4"
            >
              <Text fontSize="xl">Lanzamientos de los :{"  "}</Text>
              <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
                <Button colorScheme="purple" variant="solid" ml="6">
                  {launch.rocket?.rocket_name}
                </Button>
              </Link>
            </Box>

            {/* descrupcuon */}
            <Box
              display="flex"
              mt="4"
              alignItems="center"
              justifyContent="start"
              flexDirection="row"
            >
              <Text fontSize="xl">Descripcion del lanzamiento :{"  "}</Text>
              <Button
                onClick={onToggle}
                ml="6"
                colorScheme="purple"
                variant="solid"
              >
                ver descripcion
              </Button>
            </Box>

            {/* descripcion click */}

            <Box mt="4">
              <ScaleFade initialScale={0.9} in={isOpen}>
                <Box
                  p="40px"
                  color="white"
                  bg="gray.900"
                  rounded="md"
                  shadow="md"
                  display="block"
                  width="100%"
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
    </>
  );
}
