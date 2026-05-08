import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    fetchNotifications();

  }, []);

  const fetchNotifications = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/notifications"
      );

      setNotifications(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Notifications</h1>

      {notifications.map((item) => (

        <div
          key={item.ID}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >

          <h2>{item.Type}</h2>

          <p>{item.Message}</p>

          <small>
            {item.Timestamp}
          </small>

        </div>

      ))}

    </div>
  );
}

export default App;