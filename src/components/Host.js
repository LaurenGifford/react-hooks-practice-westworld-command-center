import React, {useState} from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, hostSelected, selectedHost, onHostSelection, setHostSelected}) {
  const {id, firstName, lastName, active, imageUrl, gender, area, authorizd} = host
  const [selected, setSelected] = useState(false)
  /* NOTE: The className "host selected" renders a different style than simply "host". */

  function handleHostSelection() {
    setHostSelected(hostSelected => !hostSelected)
    onHostSelection(host)
  }

  return (
    <Card
      className={hostSelected && selectedHost.id === id ? "host selected" : "host"}
      onClick={handleHostSelection}
      image={imageUrl}
      raised
      link
    />
  );
}

export default Host;
