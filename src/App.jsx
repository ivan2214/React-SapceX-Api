import { useState, useEffect } from 'react'
import * as API from "./services/launches"
import logo from "./assets/img/logo.png"
import { Heading, Image, } from '@chakra-ui/react';
import { LaunchItem } from './components/LaunchItem';



export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])


  return (
    <>
      <Image src={logo} width={300} m="10"></Image >

      <Heading as="h1" size="lg" m="4">
        SpaceX Launches
      </Heading>
      <section>

        {
          launches.map((item) => (
            <LaunchItem key={item.flight_number} {...item}/>
          ))}
      </section>
    </>
  )
}

