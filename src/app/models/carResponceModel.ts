import { Car } from "./car";
import { ResponceModel } from "./responceModel";

export interface CarResponceModel extends ResponceModel{
    data:Car[];
}