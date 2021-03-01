import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList"

function ColdStorage({hosts, hostSelected, selectedHost, onHostSelection, setHostSelected}) {

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList 
          hosts={hosts}
          hostSelected={hostSelected}
          onHostSelection={onHostSelection}
          setHostSelected={setHostSelected}
          selectedHost={selectedHost}
        />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
