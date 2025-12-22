import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //
    const fetchAppsData = async () => {
      setLoading(true);
      axios
        .get("/appsData.json")
        .then((response) => {
          console.log(response);
          setAppsData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching the local JSON file:", error);
        });
    };
    fetchAppsData();
  }, []);

  return { appsData, loading, error };
};

export default useApps;
