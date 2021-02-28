import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({areas, hosts}) {

  const renderAreas = areas.map(area => (
    <Area 
      area={area}
      hosts={hosts.filter(host => host.area === area.name)}
      key={area.id}
    />
  ))
  return <Segment id="map">{renderAreas}</Segment>;
}

export default WestworldMap;
