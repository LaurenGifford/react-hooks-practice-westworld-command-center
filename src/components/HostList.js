import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({hosts, hostSelected, selectedHost, onHostSelection, setHostSelected}) {

  const renderHosts = hosts.map(host => (
    <Host 
      host={host}
      key={host.id}
      hostSelected={hostSelected}
      onHostSelection={onHostSelection}
      setHostSelected={setHostSelected}
      selectedHost={selectedHost}
    /> 
  ))

  
  return (
    <Card.Group itemsPerRow={6}>{renderHosts}</Card.Group>
  );
}

export default HostList;
