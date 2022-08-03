import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import * as API from "../services/launches";
import { LaunchLinks } from "./LaunchLinks";

export function RocketList() {


    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.log)
    }, [])

    return (
        <>
            <Heading as="h1" size="lg" m="4">
                SpaceX info
            </Heading>
            <section>

                {
                    launches.map((item) => (
                        <LaunchLinks key={item.links} {...item} />
                    ))}
            </section>
        </>
    )
}


