import { describe, test, expect } from 'vitest';
import { AppLocalStorage, getDate } from '../dist';

describe('test index.mjs', () => {
  test('测试是否返回值正常', () => {
    expect(getDate()).toBeTypeOf('number');
  });

  test('测试是否设置成功local', () => {
    const local = new AppLocalStorage();
    local.setItem('testKey');
    const value = local.getItem('testKey');
    console.log('获取到的值是', value);

    expect(value).toBe('testKey');
  });
});
