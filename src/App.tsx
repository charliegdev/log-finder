import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <AppBar classes={{ root: styles.appbar }} position="static">
        <Toolbar classes={{ root: styles.toolbar }}>
          <Typography classes={{ root: styles.title }} variant="h6">
            Warcraft Log Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.container}>
        <TextField
          autoFocus
          className={styles.raiderIOInput}
          color="info"
          focused
          fullWidth
          id="outlined-basic"
          label="Raider.IO URL"
          placeholder="Paste the Raider.IO URL"
          type="url"
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default App;
