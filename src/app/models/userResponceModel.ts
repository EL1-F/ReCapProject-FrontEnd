import { ResponceModel } from "./responceModel";
import { User } from "./user";

export interface UserResponceModel extends ResponceModel{
    data:User[];
}