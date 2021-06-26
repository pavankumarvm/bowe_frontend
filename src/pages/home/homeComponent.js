import { Component } from "react";
import Header from "../../components/home/header/headerComponent";
import JoinCommunity from "../../components/home/joinCommunity/joinCommunityComponent";
import StudentPath from "../../components/home/studentPath/studentPathComponent";
import RecentClients from "../../components/home/recentClients/recentClientsComponent";
import LetsConnect from "../../components/letsConnect/letsConnectComponent";
import "./homeComponent.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <StudentPath></StudentPath>
        <RecentClients></RecentClients>
        <JoinCommunity></JoinCommunity>
        <LetsConnect></LetsConnect>
        <footer>
          <h4>&copy; 2021,BOWE(Best Of WE) Pvt. Ltd.</h4>
        </footer>
      </div>
    );
  }
}

export default Home;
