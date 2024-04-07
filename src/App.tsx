import React, { useState } from "react";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import LinkIcon from "@mui/icons-material/Link";
import WineBarIcon from "@mui/icons-material/WineBar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./App.module.scss";
import { extractCharacterInfo } from "./utils/extractCharacterInfo";
import { getMPlusDamageURL, getRaidDamageURL } from "./utils/getLogURLs";

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
          focused
          fullWidth
          id="outlined-basic"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon color="primary" />
              </InputAdornment>
            ),
          }}
          label="Raider.IO URL"
          onChange={(event) => {
            const url = event.target.value;
            const characterInfo = extractCharacterInfo(url);
            if (characterInfo) {
              setRaidDamageURL(getRaidDamageURL(characterInfo));
              setMPlusDamageURL(getMPlusDamageURL(characterInfo));
            }
          }}
          onFocus={(event) => {
            event.target.select();
          }}
          placeholder="Paste the Raider.IO URL"
          required
          type="url"
          variant="outlined"
        />
        <div className={styles.buttonGroup}>
          <Button
            disabled={!mPlusDamageURL}
            href={mPlusDamageURL}
            target="_blank"
            rel="noreferrer"
            startIcon={<CoffeeMakerIcon />}
            variant="contained"
          >
            See M+ Damage
          </Button>
          <Button
            disabled={!raidDamageURL}
            color="secondary"
            href={raidDamageURL}
            target="_blank"
            rel="noreferrer"
            startIcon={<WineBarIcon />}
            variant="contained"
          >
            See Raid Damage
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
