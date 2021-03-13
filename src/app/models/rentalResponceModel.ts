import { Rental } from "./rental";
import { ResponceModel } from "./responceModel";

export interface RentalResponceModel extends ResponceModel{
    data:Rental[];
}