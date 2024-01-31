"use client";

import { useEffect } from "react";
import { loadGraph } from "../../loadGraph/loadGraph";

export default function Home() {
  useEffect(() => {
    loadGraph();
  }, []);

  return (
    <div className="container">
      <svg id="container" width="1060" height="960" viewBox="0 0 960 960"></svg>
    </div>
  );
}
