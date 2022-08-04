import { useState, useEffect } from "react";
import { Heading, Text } from "@chakra-ui/react";
import * as API from "../services/launches";
import { LaunchLinks } from "./LaunchLinks";

export function RocketList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" m="4">
        <Text fontSize="5xl" color="gray.900">
          SpaceX info de lanzamiento
        </Text>
      </Heading>
      <section>
        {launches.map((item) => (
          <LaunchLinks key={item.rocket_id} {...item} />
        ))}
      </section>
    </>
  );
}
