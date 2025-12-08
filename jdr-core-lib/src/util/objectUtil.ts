import { KeyValue } from "../type/index.js";

/**
 * 对象工具类
 */
export class ObjectUtil {
  /**
   * 深拷贝对象
   * @param obj 深拷贝对象
   * @returns
   *     1. null 或者不是对象类型： 返回传参本身
   */
  static deepClone<T>(obj: T): T {
    if (obj === null || typeof obj != "object") {
      // null / 不是对象类型
      return obj;
    }

    if (obj instanceof Date) {
      // 日期类型(Date)
      return new Date(obj.getTime()) as T;
    }

    if (Array.isArray(obj)) {
      // 数组类型(Array)
      return obj.map((item) => this.deepClone(item)) as T;
    }

    if (typeof obj === "object") {
      // 对象类型(Object)

      const cloned: KeyValue = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          cloned[key] = this.deepClone((obj as KeyValue)[key]);
        }
      } //end for

      return cloned as T;
    } //end if

    return obj;
  } //end func

  /**
   * 合并多个同类型对象为一个对象(同名属性会被后面对象的覆盖)
   * 例：
   *   1.{a: "a", b: "b"}, {c:"c", d:"d"} -> {a:"a",b:"b",c:"c",d:"d"}
   *   2.{a: "a", b: "b"}, {a: "a2", b: "b2"} -> {a: "a2", b: "b2"}
   * @param objArr 待合并对象数组
   */
  static merge<T extends object>(...objArr: T[]): T {
    return objArr.reduce((result, current) => {
      return { ...result, ...current };
    }, {} as T);
  } //end func

  /**
   * 检查对象是否为空
   * @param obj 待检查对象
   * @returns true:对象为空; false:不空
   */
  static isEmpty(obj: object): boolean {
    if (!obj) return true;
    return Object.keys(obj).length === 0;
  }
} //end class
