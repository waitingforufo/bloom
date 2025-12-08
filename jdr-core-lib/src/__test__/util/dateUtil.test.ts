import { TimeRange } from "../../type";
import { CommonUtil } from "../../util/commonUtil";
import { DateUtil } from "../../util/dateUtil";

describe("DateUtil类的测试", () => {
  /**
   * format()
   */
  describe("format()", () => {
    // 传Date类型
    //const dt = new Date();  // 系统时间
    const dt = new Date(2025, 11, 7, 12, 15, 30); // month: 0 based 11:12月

    it("test - 1", () => {
      //console.log(DateUtil.format(dt));
      expect(DateUtil.format(dt)).toEqual("2025-12-07 12:15:30");
    });

    // 传string类型
    it("", () => {});

    // 传number类型
    it("", () => {});
  });

  /**
   * getTimeDiffValue()
   */
  describe("getTimeDiffValue()", () => {
    it("dummy", () => {
      expect(DateUtil.getTimeDiffValue(new Date())).toBeLessThanOrEqual(60); // 差值肯定小于60秒
    });
  });

  /**
   * getRelativeTime()
   */
  describe("getRelativeTime()", () => {
    it("test - 1: 刚刚", () => {
      expect(DateUtil.getRelativeTime(new Date())).toEqual("刚刚"); // 差值肯定小于60秒
    });

    it("test - 2: 1小时以内", () => {
      const sysDt = new Date();
      // 1小时以内的新时刻
      const tmpDt = new Date(sysDt.getTime() - 1800000); // 30分钟前
      expect(DateUtil.getRelativeTime(tmpDt)).toEqual("30分钟前");
    });

    it("test - 3: 24小时以内", () => {
      const sysDt = new Date();
      // 24小时以内的新时刻
      const tmpDt = new Date(sysDt.getTime() - 18000000); // 5小时前
      expect(DateUtil.getRelativeTime(tmpDt)).toEqual("5小时前");
    });

    it("test - 4: 3天以内", () => {
      const sysDt = new Date();
      // 3天以内的新时刻(超过1天，未超过30天)
      const tmpDt = new Date(sysDt.getTime() - 172800000); // 2天前
      expect(DateUtil.getRelativeTime(tmpDt)).toEqual("2天前");
    });

    it("test - 5: 超过24小时，不超过30天", () => {
      const sysDt = new Date();
      // 超过24小时，不超过30天以内的新时刻
      const tmpDt = new Date(sysDt.getTime() - 432000000); // 5天前
      expect(DateUtil.getRelativeTime(tmpDt)).toEqual("5天前");
    });

    it("test - 6: 超过30天以内，直接返回传递的时刻", () => {
      const sysDt = new Date();
      // 超过30天以内的新时刻
      const tmpDt = new Date(sysDt.getTime() - 3024000000); // 35天前
      expect(DateUtil.getRelativeTime(tmpDt)).toEqual(DateUtil.format(tmpDt));
    });
  });

  /**
   * isValidTimeRange()
   */
  describe("isValidTimeRange()", () => {
    it("正常系1", async () => {
      const dt1 = new Date();
      await CommonUtil.sleep(2000);
      const dt2 = new Date();

      // 开始时刻 <= 终了时刻  OK
      const tmRange: TimeRange = {
        startTime: dt1,
        endTime: dt2,
      };

      expect(DateUtil.isValidTimeRange(tmRange)).toBe(true);
    });

    it("异常系1", async () => {
      const dt1 = new Date();
      await CommonUtil.sleep(2000);
      const dt2 = new Date();

      // 开始时刻 > 终了时刻  NG
      const tmRange: TimeRange = {
        startTime: dt2,
        endTime: dt1,
      };

      expect(DateUtil.isValidTimeRange(tmRange)).toBe(false);
    });
  });
});
