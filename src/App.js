import { Route, Switch } from "react-router-dom";
import BottomCards from "./BottomCards";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import Header from "./Header";
import Navbar from "./Navbar";
import { PageNotFound } from "./PageNotFound";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ProjectsCard from "./ProjectsCard";
import Sidebar from "./Sidebar";
import SmallCards from "./SmallCards";
import "./styles.css";
import Users from "./Users";
import { AppProvider } from "./context";

export default function App() {
  return (
    <AppProvider>
      <div className="App" id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div className="container-fluid">
                <Switch>
                  <Route exact path="/">
                    <Header title={"Dashboard"} />
                    <SmallCards />
                    <div className="row">
                      <ProjectsCard />
                      <BottomCards />
                    </div>
                  </Route>
                  <Route path="/profile/:id">
                    <Header title={"Profile Details"} />
                    <Profile />
                  </Route>
                  <Route exact path="/edit-profile/:id">
                    <Header title={"Edit Profile Details"} />
                    <EditProfile />
                  </Route>
                  <Route path="/users">
                    <Header title={"User Details"} />
                    <Users />
                  </Route>
                  <Route path="/create-user">
                    <Header title={"Create New User"} />
                    <CreateUser />
                  </Route>
                  <Route exact path="/edit-user/:id">
                    <Header title={"Edit User"} />
                    <EditUser />
                  </Route>
                  <Route path="/*">
                    <PageNotFound />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </AppProvider>
  );
}
