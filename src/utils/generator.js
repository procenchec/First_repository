import Iframe from "../components/Iframe";
import { cloneElement } from "react";


export function LabsResult(array) {
    const result = {}
    for (var i in array) {
        if (!array[i].indexOf('.pdf')) { result[`l${+i+1}`] = array[i] }
        else { 
            result[`l${+i+1}`] = cloneElement(<Iframe></Iframe>, { src: array[i] })
        }
    }
    return result
}
