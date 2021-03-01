import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({areas, hosts, hostSelected, selectedHost, onHostSelection, setHostSelected}) {

  const renderAreas = areas.map(area => (
    <Area 
      area={area}
      hosts={hosts.filter(host => host.area === area.name && host.active)}
      key={area.id}
      hostSelected={hostSelected}
      selectedHost={selectedHost}
      onHostSelection={onHostSelection}
      setHostSelected={setHostSelected}
    />
  ))
  return <Segment id="map">{renderAreas}</Segment>;
}

export default WestworldMap;
