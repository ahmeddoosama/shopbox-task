import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: "root"
})

export class HandleErrorsFacade {
    constructor(
        private readonly toastrService: ToastrService
    ) {}

    handleError(error: any){
        this.toastrService.error(error?.graphQLErrors[0].message);
        console.log(error?.graphQLErrors[0].message);
    }
}