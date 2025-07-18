import React from "react";

const dummyStats = [
  {
    shortUrl: "https://sho.rt/abc123",
    createdAt: "2025-07-15T10:00:00Z",
    expiresAt: "2025-08-15T10:00:00Z",
    totalClicks: 5,
    clicks: [
      {
        timestamp: "2025-07-16T12:00:00Z",
        source: "https://google.com",
        location: "Hyderabad, India"
      },
      {
        timestamp: "2025-07-17T15:30:00Z",
        source: "https://facebook.com",
        location: "Bangalore, India"
      }
    ]
  }
];

const StatsPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>📊 URL Stats</h1>
      {dummyStats.map((url, index) => (
        <div key={index} style={{ padding: "1rem", border: "1px solid #ccc", marginTop: "1rem", borderRadius: "8px" }}>
          <p><strong>Short URL:</strong> <a href={url.shortUrl} target="_blank" rel="noreferrer">{url.shortUrl}</a></p>
          <p><strong>Created:</strong> {new Date(url.createdAt).toLocaleString()}</p>
          <p><strong>Expires:</strong> {new Date(url.expiresAt).toLocaleString()}</p>
          <p><strong>Total Clicks:</strong> {url.totalClicks}</p>

          <h4>Click Details:</h4>
          <ul>
            {url.clicks.map((click, i) => (
              <li key={i}>
                🕒 {new Date(click.timestamp).toLocaleString()} — From: {click.source} — 🌍 {click.location}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StatsPage;
