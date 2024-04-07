import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { extractCharacterInfo } from "./utils/extractCharacterInfo";
import { getRaidDamageURL, getMPlusDamageURL } from "./utils/getLogURLs";

import styles from "./App.module.scss";

function App() {
  const [raidDamageURL, setRaidDamageURL] = useState("");
  const [mPlusDamageURL, setMPlusDamageURL] = useState("");
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
          onChange={(event) => {
            const url = event.target.value;
            const characterInfo = extractCharacterInfo(url);
            if (characterInfo) {
              setRaidDamageURL(getRaidDamageURL(characterInfo));
              setMPlusDamageURL(getMPlusDamageURL(characterInfo));
            }
          }}
          placeholder="Paste the Raider.IO URL"
          type="url"
          variant="outlined"
        />
        {raidDamageURL}
        <br />
        {mPlusDamageURL}
      </div>
    </div>
  );
}

export default App;
