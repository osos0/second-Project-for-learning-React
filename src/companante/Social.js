import React from "react";
import Iteam from "./iteam";

export default function Social() {
  return (
    <ul className="Ul-Con">
      <Iteam
        p={{
          media: "Facebook",
          info: "Facbook",
          img: "https://picsum.photos/20",
        }}
      />
      <Iteam
        p={{
          media: "Youtube",
          info: "youtube",
          img: "https://picsum.photos/21",
        }}
      />
      <Iteam
        p={{
          media: "Linkedin",
          info: "linkedin",
          img: "https://picsum.photos/22",
        }}
      />
    </ul>
  );
}
