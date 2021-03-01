import React, {useState} from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage"
import HostInfo from "./HostInfo"
import LogPanel from "./LogPanel"


function Headquarters({hosts, selectedHost, onHostSelection, setHostSelected, hostSelected}) {
  // const [hostSelected, setHostSelected] = useState(false)


  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage 
          hosts={hosts} 
          selectedHost={selectedHost}
          hostSelected={hostSelected}
          onHostSelection={onHostSelection}
          setHostSelected={setHostSelected}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        {hostSelected ? 
        <HostInfo 
        hosts={hosts}
        hostSelected={hostSelected}
        selectedHost={selectedHost}
      /> : <Details />}
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
