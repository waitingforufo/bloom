import { CommonUtil } from "../../util/commonUtil";
describe("CommonUtil类的测试", () => {
  // sleep()
  describe("sleep()", () => {
    it("test - 1 :延时2秒", async () => {
      console.log("\n***** 调用前时刻：", new Date());
      await CommonUtil.sleep(2000);
      console.log("\n***** 调用后时刻：", new Date());
    });
  });

  // delay()
  describe("delay()", () => {
    it("test - 1 :延时2秒", async () => {
      console.log("\n***** 调用前时刻：", new Date());
      await CommonUtil.delay(2000);
      console.log("\n***** 调用后时刻：", new Date());
    });
  });

  /**
   * createSuccessResponse()
   */
  describe("createSuccessResponse()", () => {
    it("应该创建成功的响应", () => {
      const response = CommonUtil.createSuccessResponse({ id: 1 });
      expect(response).toEqual({
        success: true,
        data: { id: 1 },
        code: 0,
      });
    });

    it("应该创建不带数据的成功响应", () => {
      const response = CommonUtil.createSuccessResponse();
      expect(response).toEqual({
        success: true,
        code: 0,
      });
    });
  });

  /**
   * createErrorResponse()
   */
  describe("createErrorResponse()", () => {
    it("应该创建错误的响应", () => {
      const response = CommonUtil.createErrorResponse("错误消息", 1001, { field: "name" });
      expect(response).toEqual({
        success: false,
        error: "错误消息",
        code: 1001,
        data: { field: "name" },
      });
    });
  });

  /**
   * debounce()
   */
  describe("debounce()", () => {
    it("应该防抖函数", (done) => {
      let callCount = 0;
      const debounced = CommonUtil.debounce(() => {
        callCount++;
      }, 50);

      debounced();
      debounced();
      debounced();

      setTimeout(() => {
        expect(callCount).toBe(1);
        done();
      }, 100);
    });
  });

  /**
   * throttle()
   */
  describe("throttle()", () => {
    it("应该节流函数", (done) => {
      let callCount = 0;
      const throttled = CommonUtil.throttle(() => {
        callCount++;
      }, 50);

      throttled();
      throttled();
      throttled();

      setTimeout(() => {
        throttled();
        expect(callCount).toBe(2);
        done();
      }, 60);
    });
  });
});
