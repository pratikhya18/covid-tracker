import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {AllServiceService} from "../../../service/all-service.service"

@Injectable()
export class graphFacade{
    graphdata: Subject<any> = new Subject<any>();

    constructor(private apiservice: AllServiceService) { }

    getGraphDetails() {
        // console.log("body"+body)
        this.apiservice.getGraph().subscribe({
            next: response => {
                if (response) {
                    this.graphdata.next(response);
                  
                }
            },
            error: () => {
                console.error();
            }
        });
    }

}