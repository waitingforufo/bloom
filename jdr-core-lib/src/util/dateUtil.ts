import { TimeDiffUnit, TimeRange } from "../type";

/**
 * 日期工具类
 */
export class DateUtil {
  /**
   * 格式化日期
   * @param date
   * @param format 格式指定（默认格式： YYYY-MM-DD HH:mm:ss）
   *                   YYYY： 年度
   *                   MM  ： 月份(01 - 12)
   *                   DD  ： 日期(01 - 31)
   *                   HH  ： 时间(00 - 23)
   *                   mm  ： 分钟(00 - 59)
   *                   ss  ： 秒数(00 - 59)
   * @returns 格式化后的日期字符串
   */
  static format(date: Date | string | number, format = "YYYY-MM-DD HH:mm:ss"): string {
    const d = new Date(date);

    const pad = (n: number) => n.toString().padStart(2, "0");

    return format
      .replace("YYYY", d.getFullYear().toString())
      .replace("MM", pad(d.getMonth() + 1))
      .replace("DD", pad(d.getDate()))
      .replace("HH", pad(d.getHours()))
      .replace("mm", pad(d.getMinutes()))
      .replace("ss", pad(d.getSeconds()));
  }

  /**
   * 获取指定时间与系统时间的差值（默认：秒数）
   * @param date 指定时间
   * @param timeDiffUnit 差值单位
   * @returns 指定时间与系统时间的差值
   */
  static getTimeDiffValue(
    date: Date | string | number,
    timeDiffUnit: TimeDiffUnit = TimeDiffUnit.UNIT_SECONDS
  ): number {
    const now = new Date();
    const target = new Date(date);

    let diffVal = Math.floor(now.getTime() - target.getTime());
    if (timeDiffUnit === TimeDiffUnit.UNIT_SECONDS) {
      diffVal /= 1000;
    }

    return diffVal;
  }

  /**
   * 获取相对时间描述
   * @param date 指定日期
   * @returns 相对时间描述
   *              系统时间 - 指定时间 的差值在n秒以内，就返回相应的字符串
   *              n                  返回字符串
   *              60秒              “刚刚”
   *              3600秒（6分钟）    "xx分钟前"
   *              864000秒（24小时） "xx小时前"
   *              2592000秒（3天）   "xx天前"
   *              上计以外           直接显示日期字符串（格式 YYYY-MM-DD HH:mm:ss）
   */
  static getRelativeTime(date: Date | string | number): string {
    let retStr = "";

    const diffInSec = this.getTimeDiffValue(date);

    if (diffInSec < 60) {
      // 60秒以内
      retStr = "刚刚";
    } else if (diffInSec < 3600) {
      // 60分钟（1小时）以内
      retStr = `${Math.floor(diffInSec / 60)}分钟前`;
    } else if (diffInSec < 86400) {
      // 24小时以内
      retStr = `${Math.floor(diffInSec / 3600)}小时前`;
    } else if (diffInSec < 2592000) {
      // 720小时（30天）以内
      retStr = `${Math.floor(diffInSec / 86400)}天前`;
    } else {
      // 超过30天

      //取得日期字符串
      retStr = this.format(date);
    } //end if

    return retStr;
  }

  /**
   * 检查时间范围是否有效
   * @param timeRange 时间范围对象
   * @returns true:有效（开始时间<=结束时间）; false:无效(开始时间>结束时间)
   */
  static isValidTimeRange(timeRange: TimeRange): boolean {
    const begin = new Date(timeRange.startTime);
    const end = new Date(timeRange.endTime);

    return begin <= end;
  }
}
