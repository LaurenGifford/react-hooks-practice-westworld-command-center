import React from "react";
import "../stylesheets/Area.css";

import Host from "./Host"

function Area({area, hosts}) {
  let {id, name, limit, auth_req} = area

  const renderHosts = hosts.map(host => (
    <Host 
      host={host}
      key={host.id}
    /> 
  ))

  function capitalize (string) {
    return string[0].toUpperCase() + string.slice(1)
  }


  return (
    <div
      className="area"
      id={
        name
      }
    >
      <h3 className="labels">
        {capitalize(name).replace(/_/g, " ")}
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
