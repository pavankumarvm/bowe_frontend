import { Component } from "react";

import client1 from "../images/client1.jpeg";
import client2 from "../images/client2.jpeg";
import client3 from "../images/client3.jpeg";
import client4 from "../images/client4.jpeg";
import client5 from "../images/client5.jpeg";
import client6 from "../images/client6.jpeg";

import "./recentClientsComponent.css";

class RecentClients extends Component {
  render() {
    return (
      <div className="recentClients">
        <div className="rC-title">
          <h1>Recent Clients</h1>
        </div>
        <div className="rC-desc">
          <img src={client1} alt="client" />
          <img src={client2} alt="client" />
          <img src={client3} alt="client" />
          <img src={client4} alt="client" />
          <img src={client5} alt="client" />
          <img src={client6} alt="client" />
        </div>
      </div>
    );
  }
}
export default RecentClients;
