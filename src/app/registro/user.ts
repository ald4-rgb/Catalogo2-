import { Role } from "../usuarios/role";
import { Region } from "./region";

export class User {
  id:number;
  name: string;
  lastName: string;
  lastNameSec:string;
  dateBorn:string;
  region:Region;
  email: string;
  username: string;
  password: string;
  foto:string;
  onSave= false;

    roles:Role[] =[];
  
  role:string[] =[];

}
