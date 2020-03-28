import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(encodeURIComponent(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }

  async get(storageKey: string) {
    const ret = await Storage.get({ key: storageKey });
    if (ret.value) {
      return JSON.parse(unescape(decodeURIComponent(atob(ret.value))));
    } else {
      return false;
    }
  }

  async removeItem(storageKey: string) {
    await Storage.remove({ key: storageKey });
  }

  async clear() {
    await Storage.clear();
  }
}
