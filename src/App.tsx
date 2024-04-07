import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
        <ButtonGroup
          classes={{ root: styles.buttonGroup }}
          variant="contained"
          aria-label="Basic button group"
        >
          <Button href={mPlusDamageURL} target="_blank" rel="noreferrer">
            See M+ Damage
          </Button>
          <Button
            color="secondary"
            href={raidDamageURL}
            target="_blank"
            rel="noreferrer"
          >
            See Raid Damage
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
