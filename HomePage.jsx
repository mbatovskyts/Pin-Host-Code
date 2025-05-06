import React from "react";
import {
  LiveboardEmbed,
  SearchEmbed
} from "@thoughtspot/visual-embed-sdk/react";

const LIVEBOARD_ID = "127d727f-f43b-4f36-a72b-fcd869cbe05d";
const ANSWER_ID = "125d9c78-a658-4789-a015-c927092248a5";

const HomePage = ({ searchEmbedRef, liveboardEmbedRef }) => (
  <div>

    <div style={{ display: "none" }}>
      <SearchEmbed
        ref={searchEmbedRef}
        answerId={ANSWER_ID}
        frameParams={{ height: 0, width: 0 }}
      />
    </div>

    <div style={{ margin: "2rem 0" }}>
      <LiveboardEmbed
        ref={liveboardEmbedRef}
        liveboardId={LIVEBOARD_ID}
        frameParams={{ height: 600, width: "100%" }}
      />
    </div>
  </div>
);

export default HomePage;