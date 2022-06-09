import React, { useEffect } from "react";

export default function Hellorafa() {
  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div>hellorafa</div>;
}
