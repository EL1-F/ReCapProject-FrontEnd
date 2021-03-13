import { Color } from "./color";
import { ResponceModel } from "./responceModel";

export interface ColorResponceModel extends ResponceModel{
    data:Color[];
}