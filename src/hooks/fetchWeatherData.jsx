import { useEffect } from "react";

export default function useFetchWeatherData({setData}) {
    const URL = "https://example-apis.vercel.app/api/weather";

    async function fetchData() {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

  useEffect(() => {
    
    fetchData();
    const intervalID = setInterval(() => {
      fetchData();
    }, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
}