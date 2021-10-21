import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

	set(key: string, value: any) {
		this.storage.set(key, value);
	}

	get(key: string) {
		return this.storage.get(key);
	}

	clear() {
		return this.storage.clear();
	}

  remove(key: string) {
    this.storage.remove(key);
  }
}
