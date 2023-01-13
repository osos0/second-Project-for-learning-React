import React from "react";
import Card from "./Cont-Card";

export default function Contante() {
  const info = [
    {
      key: 1,
      img: "./image/img-1.jpg",
      name: "Ossama Magdy",
      company: "Xerox",
      Phone: "+002-01280104685",
      Postion: "Gesr El-Suas",
    },
    {
      key: 2,
      img: "./image/img-2.jpg",
      name: "Chris Ossama",
      company: "FaceBook",
      Phone: "+002-01550750345",
      Postion: "Gesr El-Suas",
    },
    {
      key: 3,
      img: "./image/img-3.jpg",
      name: "Eliano Ossama",
      company: "Amzone",
      Phone: "+002-01280104685",
      Postion: "Gesr El-Suas",
    },
  ];

  const members = info.map((member) => (
    <Card
      key={member.key}
      img={member.img}
      name={member.name}
      company={member.company}
      Phone={member.Phone}
      Postion={member.Postion}
    />
  ));

  return <div className="container">{members}</div>;
}
