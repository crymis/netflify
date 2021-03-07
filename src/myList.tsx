import React, { useEffect, useState } from "react";
import "./myList.css";

const CAT_EMOJIS = ["😸", "🐈", "😹", "😻", "🙀"];
export const MyList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchMyApi = async () => {
      let response = await window.fetch("https://cat-fact.herokuapp.com/facts");
      const list = (await response.json()) as any[];
      console.log(list);
      setData(list);
    };
    fetchMyApi();
  }, []);

  return (
    <div className="List">
      <h3>Here goes some Cats {CAT_EMOJIS[4]}</h3>
      {!data.length ? (
        "loading..."
      ) : (
        <ul>
          {data.map((entry) => (
            <li key={entry.text}>
              {`${CAT_EMOJIS[Math.floor(Math.random() * 4)]} ${
                entry.text
              } (${new Date(entry.updatedAt).toLocaleDateString("de-DE")})`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
