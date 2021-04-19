import Iframe from "../components/Iframe";
import lab1 from "../assets/Sadullaev/lab1.pdf";
import { cloneElement } from "react";
import React from "react";
import { LabsResult } from "../utils/generator";

const array = [lab1, '+', "+"];

export default LabsResult(array);

// export default {
//     l1: cloneElement(<Iframe></Iframe>, { src: lab1 }),
//     l2: "+",
//     l3: "+",
// }