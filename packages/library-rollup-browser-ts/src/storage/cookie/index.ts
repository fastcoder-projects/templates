import { BaseStorage } from '../common/storage';

/**
 * cookie缓存类
 */
export class AppCookieStorage extends BaseStorage {
  getItem(): string | null {
    throw new Error('Method not implemented.');
  }

  setItem(): string | null {
    throw new Error('Method not implemented.');
  }

  removeAll(): void {
    throw new Error('Method not implemented.');
  }
}
