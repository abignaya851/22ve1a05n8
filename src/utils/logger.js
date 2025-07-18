export const logEvent = (type, message) => {
  const entry = {
    time: new Date().toLocaleString(),
    type,
    message,
  };

  const logs = JSON.parse(localStorage.getItem("logs")) || [];
  logs.push(entry);
  localStorage.setItem("logs", JSON.stringify(logs));
};

export default logEvent;
