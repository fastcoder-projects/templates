/**
 * 抽象存储基类用于复用封装模型以及逻辑
 */
export abstract class BaseStorage {
  abstract getItem(key: string): string | null;
  abstract setItem(key: string): string | null;
  abstract removeAll(): void;
}
