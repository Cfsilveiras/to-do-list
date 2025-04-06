"use client";

import React, { useEffect, useState } from "react";

export default function DailyVerse() {
  const [verse, setVerse] = useState("");

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await fetch("https://bible-api.com/john%203:16");
        const data = await response.json();
        setVerse(`${data.text} (${data.reference})`);
      } catch (error) {
        setVerse("Não foi possível carregar o versículo hoje.");
      }
    };

    fetchVerse();
  }, []);


  return ( 
  
  <div className="container-bible">
    <h2>Verse of the day</h2>
  <p>{verse}</p>
  </div>
  );
}