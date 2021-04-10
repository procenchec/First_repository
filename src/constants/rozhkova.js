import Iframe from "../components/Iframe";
import lab1 from "../assets/Rozhkova/ЛБ1_Рожкова В.А.pdf";
import lab2 from "../assets/Rozhkova/ЛБ2_Рожкова В.А.pdf";
import lab3 from "../assets/Rozhkova/ЛБ3_Рожкова В.А.pdf";
import lab4 from "../assets/Rozhkova/ЛБ4_Рожкова В.А.pdf";
import { cloneElement } from "react";
import React from "react";
export default {
    l1: <Iframe src={lab1}></Iframe>,
    l2: cloneElement(<Iframe></Iframe>, { src: lab2 }),
    l3: cloneElement(<Iframe></Iframe>, { src: lab3 }),
    l4: cloneElement(<Iframe></Iframe>, { src: lab4 }),
    l5: "+",
    l6: "+",
    l7: "+"
}