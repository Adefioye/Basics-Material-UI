import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";

const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      {/* <Rightbar />
      <Leftbar />
      <Feed /> */}
    </div>
  );
};

export default App;
