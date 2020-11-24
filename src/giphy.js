import React, { useState, useEffect } from "react";
import axios from "axios";

const Giphy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/random", {
        params: {
          api_key: "IoDBAz3FIXukmSTslgodCB9Pe8zQqGzS",
        },
      });
      console.log(result);
      setData(result.data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="api">
      <img src={data.image_url} alt={data.title} />
    </div>
  );
};

export default Giphy;
