import { Brand } from "./brand";
import { ResponceModel } from "./responceModel";

export interface BrandResponceModel extends ResponceModel{
    data:Brand[];
}