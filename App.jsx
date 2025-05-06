import React, { useRef } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import { HostEvent } from "@thoughtspot/visual-embed-sdk";

const LIVEBOARD_ID = "127d727f-f43b-4f36-a72b-fcd869cbe05d";
const ANSWER_ID = "125d9c78-a658-4789-a015-c927092248a5";
const TAB_ID = "a28fb8c1-df6f-4daf-ae4b-efa7768b2da2";
const VIZ_NAME = "VIZ PIN TEST";

const App = () => {
  const searchEmbedRef = useRef();
  const liveboardEmbedRef = useRef();

  const handlePin = async () => {
    if (searchEmbedRef.current) {
      await searchEmbedRef.current.trigger(HostEvent.Pin, {
        vizId: ANSWER_ID,
        newVizName: VIZ_NAME,
        liveboardId: LIVEBOARD_ID,
        tabId: TAB_ID,
      });
      if (liveboardEmbedRef.current) {
        liveboardEmbedRef.current.render();
      }
      alert("Pinned and refreshed!");
    }
  };

  return (
    <div>
      <NavBar onPin={handlePin} />
      <HomePage
        searchEmbedRef={searchEmbedRef}
        liveboardEmbedRef={liveboardEmbedRef}
      />
    </div>
  );
};

export default App;