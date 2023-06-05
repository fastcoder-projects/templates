import type { AppCookieStorage } from '../cookie';
import type { AppLocalStorage } from '../local';
import type { AppSessionStorage } from '../session';

/**
 * 渠道存储辅助器
 */
export class StorageHelperOfChannel {
  constructor(
    private readonly local: AppLocalStorage,
    private readonly session: AppSessionStorage,
    private readonly cookie: AppCookieStorage,
  ) {

  }

  getItemOfLocal(key: string) {
    this.local.getItem(key);
    console.log(this.session, this.cookie);
  }
  // 等等其他的
}
