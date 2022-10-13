import { staff } from "./staff";
import { student } from "./student";

export class department{
departmentId:number | undefined;
departmentName:string | undefined;
departmentHead:string | undefined;
departementCoordinator:string | undefined;
student: student[] | undefined;
staff:staff[] | undefined;
}