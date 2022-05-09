import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {AllServiceService} from "../../../service/all-service.service"

@Injectable()
export class RegFacade{
    Registerationdata: Subject<any> = new Subject<any>();

    constructor(private apiservice: AllServiceService) { }

    postLogInDetails(body: any) {
        console.log("body"+body)
        this.apiservice.postLogInDetails(body).subscribe({
            next: response => {
                if (response) {
                    this.Registerationdata.next(response);
                }
            },
            error: () => {
                console.error();
            }
        });
    }

}