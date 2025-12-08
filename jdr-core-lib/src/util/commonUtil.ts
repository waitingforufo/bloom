/**
 * 通用工具类
 */
export class CommonUtil {
  /**
   * 延时函数
   * * 调用方法：
   *       import { CommonUtil } from "../../util/commonUtil";
   *       await CommonUtil.sleep(2000);  // 休眠2秒
   * @param ms 延时毫秒数
   * @returns Promise对象： 延时对象
   */
  static async sleep(ms: number): Promise<any> {
    // let aa = new Promise((resolve) => setTimeout(resolve, ms));
    // console.log("---\n\n", aa);  // Promise { <pending> }

    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * 延迟函数
   * @param ms 延时毫秒数
   * @returns Promise对象： 延时对象
   */
  static delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * 创建成功的响应
   * @param data 响应数据包
   * @returns    生成的响应对象
   */
  static createSuccessResponse<T>(data?: T) {
    return {
      success: true,
      data,
      code: 0,
    };
  }

  /**
   * 创建错误的相应
   * @param error 错误数据包
   * @param code  响应码
   * @param data  响应数据包
   * @returns     生成的响应对象
   */
  static createErrorResponse(error: string, code = 1000, data?: any) {
    return {
      success: false,
      error,
      code,
      data,
    };
  }

  /**
   * 防抖函数
   * @param func  要执行的函数（被异步调用）
   * @param wait  执行前需要挂起的间隔时间（单位：ms）
   * @returns
   */
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function (...args: Parameters<T>) {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => func(...args), wait);
    };
  }

  /**
   * 节流函数
   * * 初次执行的时候正常执行，再次执行的时候需要先等待指定时间间隔（单位：ms）
   * @param func   要执行的函数
   * @param limit  再次执行的时候需要挂起的时间间隔（单位：ms）
   * @returns
   */
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle = false;

    return function (...args: Parameters<T>) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
}
