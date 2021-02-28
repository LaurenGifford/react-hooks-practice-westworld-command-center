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

  return (
    <Segment id="app">
      <WestworldMap 
        hosts={hosts}
        areas={areas}
      />
      <Headquarters 
        hosts={hosts}
      />
    </Segment>
  );
}

export default App;
