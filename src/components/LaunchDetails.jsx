import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Button, Flex, Spacer, Tag, Text } from "@chakra-ui/react";
import * as API from "../services/launches";

export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();

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
           <Tag p="5" size={"lg"} colorScheme={
                    launch.launch_success ? "green" : "red"
                }>
                    {launch.launch_success ? "Exitoso" : "Fallido"}
                </Tag>
          </Flex>
          <Box>
            cohete:{" "}
            <Link to={`/rockets/${launch.rocket?.rocket_id}`} >
              <Button m="2" colorScheme='purple' variant='outline'>
                {launch.rocket?.rocket_name}
              </Button>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
}