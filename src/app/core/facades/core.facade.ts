import { Injectable, Injector } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class CoreFacade {
    constructor(private readonly injector: Injector) {}

    // #region => ActivateRoute
    private _route: ActivatedRoute | undefined;
    private get activatedRoute(): ActivatedRoute {
        if (!this._route) {
            this._route = this.injector.get(ActivatedRoute);
        }
        return this._route;
    }

    // Public apis

    snapshotPth() {
        return this.activatedRoute?.snapshot?.url[0]?.path;
    }

    snapshot() {
        return this.activatedRoute?.snapshot;
    }

    queryParams() {
        return this.activatedRoute.queryParams;
    }

    paramMap() {
        return this.activatedRoute.paramMap;
    }
    //#endregion

    //#region => FormBuilder
    private _formBuilder: FormBuilder | undefined;
    private get formBuilder(): FormBuilder {
        if (!this._formBuilder) {
            this._formBuilder = this.injector?.get(FormBuilder);
        }
        return this._formBuilder;
    }

    // Public apis
    public fb(data: any) {
        return this.formBuilder.group(data);
    }

    public array() {
        return this.formBuilder.array([]);
    }
    //#endregion

    //#region => Router
    private _router: Router | undefined;

    private get router(): Router {
        if (!this._router) {
        this._router = this.injector?.get(Router);
        }
        return this._router;
    }

    // public apis
    public navigate(url: any, query?: any) {
        return this.router.navigate(url, query);
    }

    public url() {
        return this.router.url;
    }
    //#endregion
}
