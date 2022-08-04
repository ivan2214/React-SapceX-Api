import { useState, useEffect } from "react";
import { Heading, Text } from "@chakra-ui/react";
import * as API from "../services/launches";
import { LaunchItem } from "./LaunchItem";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <>
      <Heading as="h1" size="xl" m="4">
        <Text fontSize="5xl" color="gray.200">
          SpaceX Lanzamientos
        </Text>
      </Heading>
      <section>
        {launches.map((item) => (
          <LaunchItem key={item.flight_number} {...item} />
        ))}
      </section>
    </>
  );
}
