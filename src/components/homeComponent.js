import { Component } from "react";
import JoinCommunity from "./joinCommunityComponent";
import StudentPath from "./studentPathComponent";
import RecentClients from "./recentClientsComponent";
import "./homeComponent.css";
import Header from "./headerComponent";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <StudentPath></StudentPath>
        <RecentClients></RecentClients>
        <JoinCommunity></JoinCommunity>
        <footer>
          <h4>&copy; 2021,BOWE(Best Of WE) Pvt. Ltd.</h4>
        </footer>
      </div>
    );
  }
}

export default Home;
