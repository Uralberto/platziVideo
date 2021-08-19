import { useEffect, useState } from "react";

const useInitialState = (API) => {
  const [initialState, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return initialState;
};

export default useInitialState;
