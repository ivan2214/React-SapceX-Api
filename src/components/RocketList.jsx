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
      
      <section>
        {launches.map((launch) => (
          <LaunchLinks key={launch.rocket_id} {...launch} />
        ))}
      </section>
    </>
  );
}
