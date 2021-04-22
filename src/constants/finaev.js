import Iframe from "../components/Iframe";
import lr1 from "../assets/Finaev/ЛР1 - Финаев А.С..pdf";
import lr2 from "../assets/Finaev/ЛР2 - Финаев А.С..pdf";
import lr3 from "../assets/Finaev/ЛР3 - Финаев А.С..pdf";
import lr4 from "../assets/Finaev/ЛР4 - Финаев А.С..pdf";
import lr5 from "../assets/Finaev/ЛР5 - Финаев А.С..pdf";
import lr6 from "../assets/Finaev/ЛР6 - Финаев А.С..pdf";
import { cloneElement } from "react";
import React from "react";
import Finaev from "../containers/Finaev";

const L2 = () => <Finaev lab2={true} />;
const L3 = () => <Finaev lab3={true} />;

export default {
  l1: <Iframe src={lr1}></Iframe>,
  l2: cloneElement(<Iframe></Iframe>, { src: lr2, Lab: L2 }),
  l3: cloneElement(<Iframe></Iframe>, { src: lr3, Lab: L3 }),
  l4: cloneElement(<Iframe></Iframe>, { src: lr4, Lab: Finaev }),
  l5: cloneElement(<Iframe></Iframe>, { src: lr5 }),
  l6: cloneElement(<Iframe></Iframe>, { src: lr6 }),
  l7: "+",
  l8: "+",
};
