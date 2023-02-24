import {
  get,
  getDatabase,
  limitToFirst,
  limitToLast,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";
export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase();
      const videoRef = ref(database, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);
        
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevValue) => {
            return [...prevValue, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return {
    videos,
    loading,
    error,
    hasMore,
  };
}
