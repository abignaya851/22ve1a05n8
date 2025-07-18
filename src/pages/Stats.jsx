import React from "react";


const dummyStats = [
  {
    shortUrl: "http://localhost:3000/go/abc123",
    createdAt: "2025-07-10T10:00:00Z",
    expiresAt: "2025-08-10T10:00:00Z",
    totalClicks: 4,
    clicks: [
      {
        timestamp: "2025-07-12T14:00:00Z",
        source: "https://google.com",
        location: "Mumbai, India"
      },
      {
        timestamp: "2025-07-14T17:30:00Z",
        source: "https://facebook.com",
        location: "Delhi, India"
      }
    ]
  }
];

const Stats = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>📊 URL Statistics</h1>

      {dummyStats.map((stat, index) => (
        <div key={index} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "15px", marginBottom: "20px" }}>
          <p><strong>Short URL:</strong> <a href={stat.shortUrl} target="_blank" rel="noreferrer">{stat.shortUrl}</a></p>
          <p><strong>Created At:</strong> {new Date(stat.createdAt).toLocaleString()}</p>
          <p><strong>Expires At:</strong> {new Date(stat.expiresAt).toLocaleString()}</p>
          <p><strong>Total Clicks:</strong> {stat.totalClicks}</p>

          <h4 style={{ marginTop: "10px" }}>Click Logs:</h4>
          <ul>
            {stat.clicks.map((click, i) => (
              <li key={i}>
                🕒 {new Date(click.timestamp).toLocaleString()} | 🌐 {click.source} | 📍 {click.location}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Stats;
