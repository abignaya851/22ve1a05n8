import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logEvent } from "../utils/logger";

function Redirector() {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem(shortcode);
    if (!data) {
      alert("Link not found!");
      logEvent("error", "Invalid shortcode");
      navigate("/");
      return;
    }

    const linkData = JSON.parse(data);
    const now = Date.now();

    if (now > linkData.expiry) {
      alert("Link has expired.");
      logEvent("error", "Link expired");
      navigate("/");
    } else {
      linkData.visits += 1;
      localStorage.setItem(shortcode, JSON.stringify(linkData));
      logEvent("info", "Redirecting...");
      window.location.href = linkData.url;
    }
  }, [shortcode, navigate]);

  return null;
}

export default Redirector;
