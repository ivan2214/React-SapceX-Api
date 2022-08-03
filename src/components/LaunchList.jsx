import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import * as API from "../services/launches";
import { LaunchItem } from "./LaunchItem";

export function LaunchList() {


    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.log)
    }, [])

    return (
        <>
            <Heading as="h1" size="lg" m="4">
                SpaceX Launches
            </Heading>
            <section>

                {
                    launches.map((item) => (
                        <LaunchItem key={item.flight_number} {...item} />
                    ))}
            </section>
        </>
    )
}




