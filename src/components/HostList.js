import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({hosts}) {

  const renderHosts = hosts.map(host => (
    <Host 
      host={host}
      key={host.id}
    /> 
  ))

  
  return (
    <Card.Group itemsPerRow={6}>{renderHosts}</Card.Group>
  );
}

export default HostList;
