/**
 * 字符串工具类
 */
export class StringUtil {
  /**
   * 生成随机字符串
   * @param length 生成随机字符串的长度
   * @param chars  可以包含的字符集
   * @returns      生成的随机字符串
   */
  static randomStr(
    length: number = 8,
    chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  ): string {
    let rst = "";

    for (let i = 0; i < length; i++) {
      rst += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return rst;
  }

  /**
   * 截断字符串并添加指定字符串（默认：省略号(...)）
   * @param str       待处理字符串
   * @param maxLength 指定最大长度
   * @param suffix    阶段后要添加的字符串（默认： ...）
   * @returns         处理后的字符串
   */
  static truncate(str: string, maxLength: number, suffix = "..."): string {
    if (str.length <= maxLength) return str;

    return str.substring(0, maxLength - suffix.length) + suffix;
  }

  /**
   * 驼峰命名转下划线命名
   * @param camelCase 待处理驼峰命名字符串
   * @returns         转换后的字符串
   */
  static camelToSnake(camelCase: string): string {
    return camelCase.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  }

  /**
   * 下划线命名转驼峰命名
   * @param snakeCase 待处理下划线命名字符串
   * @returns         转换后的字符串
   */
  static snakeToCamel(snakeCase: string): string {
    return snakeCase.replace(/_([A-Z])/g, (_, letter) => letter.toUpperCase());
  }
}
