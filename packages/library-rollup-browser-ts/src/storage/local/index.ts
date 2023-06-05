import { BaseStorage } from '../common/storage';

/**
 * local缓存类
 */
export class AppLocalStorage extends BaseStorage {
  getItem(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  setItem(key: string): string | null {
    window.localStorage.setItem(key, key);
    return key;
  }

  removeAll(): void {
    throw new Error('Method not implemented.');
  }
}
