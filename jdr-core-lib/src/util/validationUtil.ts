import { REGEX_EMAIL_ADDR, REGEX_ID_CARD_NO, REGEX_PHONE } from "../constant";

/**
 * 验证工具类
 */
export class ValidationUtil {
  /**
   * 检查是否为有效字符串（空字符串属于无效字符串）
   * @param obj 需要判断的对象
   * @returns false：不是字符串或者空字符串或者只有半角空格的字符串； true：以外
   */
  static isValidString(obj: any): boolean {
    return typeof obj === "string" && obj.trim().length > 0;
  }

  /**
   * 检查是否为字符串类型
   * @param obj 需要判断的对象
   * @returns true:是字符串类型(包含空字符串); false：不是字符串类型
   */
  static isString(obj: any): boolean {
    return typeof obj === "string";
  }

  /**
   * 判断是否为有效数字
   * @param obj 判断对象
   * @returns true:有效数字； false：无效数字
   */
  static isValidNumber(obj: any): boolean {
    return typeof obj === "number" && !isNaN(obj) && isFinite(obj);
  }

  /**
   * 验证邮箱格式
   * @param str 验证字符串
   * @returns true:邮箱格式; false:以外
   */
  static isEmailAddr(str: string): boolean {
    return REGEX_EMAIL_ADDR.test(str);
  }

  /**
   * 验证手机号格式（中国）
   * @param str 验证字符串
   * @returns true:是手机号码格式; false:不是手机号码格式
   */
  static isPhoneNumber(str: string): boolean {
    return REGEX_PHONE.test(str);
  }

  /**
   * 验证身份证号码格式（中国）
   * @param str 验证字符串
   * @returns true:是身份证号码格式； false:不是身份证号码格式
   */
  static isIDCardNo(str: string): boolean {
    return REGEX_ID_CARD_NO.test(str);
  }
}
