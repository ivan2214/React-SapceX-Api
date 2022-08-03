
import logo from "./assets/img/logo.png"
import { Image, } from '@chakra-ui/react';
import { Routes, Route} from "react-router-dom";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";
import { RocketList } from "./components/RocketList"



export function App() {



  return (
    <>
      <Image src={logo} width={300} m="10"></Image >
      <Routes>
        <Route path='/' element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketList />} />
      </Routes>
    </>
  )
}

