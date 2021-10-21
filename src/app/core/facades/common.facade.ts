import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LocalStorageService } from "../services/local-storage/local-storage.service";

@Injectable({
    providedIn: "root"
})

export class CommonFacade {
    constructor(
        private readonly injector: Injector,
        private readonly router: Router
    ){}

    //#region => LocalStorage
    public _localStorageService: LocalStorageService | undefined;
    public get localStorageService(): LocalStorageService {
        if (!this._localStorageService) {
            this._localStorageService = this.injector?.get(LocalStorageService);
        }
        return this._localStorageService;
    }

    navigate(url: any, query?: any) {
        return this.router.navigate(url, query);
    }

    // Public apis
    setItem(key: any, value: any) {
        return this.localStorageService.set(key, value);
    }

    getItem(key: any) {
        return this.localStorageService.get(key);
    }

    removeItem(key: any) {
        return this.localStorageService.remove(key);
    }

    clearLocalStorage() {
        return this.localStorageService.clear();
    }
    //#endregion

    //#region => General
    public refreshPage() {
        window.location.reload();
    }
    //#endregion

    //#region => Toastr
    private _toastrService: ToastrService | undefined;
    public get toastrService(): ToastrService {
        if (!this._toastrService) {
        this._toastrService = this.injector.get(ToastrService);
        }
        return this._toastrService;
    }

    success(variables: any, title?:string) {
        return this.toastrService.success(variables,title);
    }

    info(variables: any) {
        return this.toastrService.info(variables);
    }
    //#endregion
}