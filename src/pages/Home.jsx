import { useState } from "react";
import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { logEvent } from "../utils/logger";
import { Link } from "react-router-dom";

function Home() {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [validity, setValidity] = useState("30");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!url.startsWith("http")) {
      alert("Please enter a valid URL starting with http or https");
      logEvent("error", "Invalid URL");
      return;
    }

    const shortcode = code || Math.random().toString(36).substring(2, 8);
    const data = JSON.parse(localStorage.getItem(shortcode));

    if (data) {
      alert("Shortcode already exists. Try another.");
      logEvent("error", "Shortcode collision");
      return;
    }

    const expiry = Date.now() + parseInt(validity) * 60000;
    const info = { url, expiry, visits: 0 };

    localStorage.setItem(shortcode, JSON.stringify(info));
    setShortUrl(`http://localhost:3000/${shortcode}`);
    logEvent("info", `Created short link for ${url}`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Beginner URL Shortener</Typography>
      <Box mt={2} display="flex" flexDirection="column" gap={2}>
        <TextField label="Long URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <TextField label="Shortcode (optional)" value={code} onChange={(e) => setCode(e.target.value)} />
        <TextField label="Validity (in minutes)" type="number" value={validity} onChange={(e) => setValidity(e.target.value)} />
        <Button variant="contained" onClick={handleShorten}>Generate</Button>
        {shortUrl && (
          <Typography>Short URL: <a href={shortUrl}>{shortUrl}</a></Typography>
        )}
        <Link to="/stats" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">Go to Stats</Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Home;
