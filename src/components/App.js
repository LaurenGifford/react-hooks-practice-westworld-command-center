import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";

import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {
  const hostsURL = "http://localhost:3001/hosts"
  const areasURL = "http://localhost:3001/areas"
  const [hosts, setHosts] = useState([])
  const [areas, setAreas] = useState([])
  const [selectedHost, setSelectedHost] = useState({})
  const [hostSelected, setHostSelected] = useState(false)

  useEffect(() => {
    fetch(hostsURL)
    .then(response => response.json())
    .then(data => setHosts(data))
  }, [])

  useEffect(() => {
    fetch(areasURL)
    .then(response => response.json())
    .then(data => setAreas(data))
  }, [])

  function handleSelectedHost(host) {
    console.log(selectedHost, host)
    setSelectedHost(() => host)
  }

  return (
    <Segment id="app">
      <WestworldMap 
        hosts={hosts}
        areas={areas}
        selectedHost={selectedHost}
        onHostSelection={handleSelectedHost}
        hostSelected={hostSelected}
        setHostSelected={setHostSelected}
      />
      <Headquarters 
        hosts={hosts}
        selectedHost={selectedHost}
        onHostSelection={handleSelectedHost}
        hostSelected={hostSelected}
        setHostSelected={setHostSelected}
      />
    </Segment>
  );
}

export default App;
