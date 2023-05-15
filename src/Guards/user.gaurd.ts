/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class UserGaurd implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        console.log(context)
        throw new Error("Method not implemented.");
    }

}