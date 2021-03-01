import React from "react";
import "../stylesheets/Area.css";

import Host from "./Host"

function Area({area, hosts, hostSelected, selectedHost, onHostSelection, setHostSelected}) {
  const {id, name, limit, auth_req} = area

  const renderHosts = hosts.map(host => (
    <Host 
      host={host}
      key={host.id}
      hostSelected={hostSelected}
      selectedHost={selectedHost}
      onHostSelection={onHostSelection}
      setHostSelected={setHostSelected}
    /> 
  ))

  function format (string) {
    let capitalized = string[0].toUpperCase() + string.slice(1)
    return capitalized.replace(/_/g, " ")
  }


  return (
    <div
      className="area"
      id={
        name
      }
    >
      <h3 className="labels">
        {format(name)}
        {/* {format(name).replace(/_/g, " ")} */}
      </h3>
      {renderHosts}
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.area.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.area.name}. The limit for that area is ${props.area.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
