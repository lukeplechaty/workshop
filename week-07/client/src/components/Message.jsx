import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Message() {
  let { username } = useParams();
  const [imgUrl, setImgUrl] = useState(null);
  useEffect(() => {
    let id = 0;
    async function fetchFox() {
      const res = await fetch("https://week-6-api.vercel.app/api/images");
      const jsonData = await res.json();
      setImgUrl(jsonData[id == jsonData.length ? (id = 0) : id++].url);
    }
    fetchFox();
    const intervalId = setInterval(fetchFox, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>{username}'s Messages</h1>
      <img src={imgUrl} alt="random fox" />
    </>
  );
}
