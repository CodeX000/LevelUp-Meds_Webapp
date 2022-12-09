import React from "react";

import styles from "./Homepage.module.scss";
import { Button, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Menubar from "../Menubar/Menubar";
import Appointment from "../Appointment/Appointment";
import Medication from "../Medication/Medication";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";

function Homepage() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <Box className={styles.Homepage}>
      {/* <Box className={styles.Container}>
        <h1>HOMEPAGE</h1>
        <Button variant="contained" onClick={goToLoginPage}>
          Go TO LOGIN PAGE
        </Button>
      </Box>
      <Footer /> */}
    </Box>
  );
}

export default Homepage;
