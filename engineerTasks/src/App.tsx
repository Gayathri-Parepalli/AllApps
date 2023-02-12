import React, { useEffect, useState } from "react";
import TableData from "./components1/TableData";

function App() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch("https://api.neodrafts.com/wp-json/wp/v2/Posts", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // console.log(JSON.parse(data.data));
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(data);
  const display = data.map((val: any) => val.content.rendered);
  return (
    <div>
      {/* <TableData/> */}
      {/* {JSON.stringify(data)} */}
      <div
        dangerouslySetInnerHTML={{
          __html: display,
        }}
      />
    </div>
  );
}

export default App;
