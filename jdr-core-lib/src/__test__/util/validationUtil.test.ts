import { ValidationUtil } from "../../util/validationUtil";

describe("ValidationUtil类的测试", () => {
  /**
   * isValidString()
   */
  describe("isValidString()函数的测试", () => {
    it("有效字符串的验证", () => {
      expect(ValidationUtil.isValidString("test")).toBe(true);
      expect(ValidationUtil.isValidString("ABCabc_* 0912@")).toBe(true);
    });

    it("无效字符串的验证", () => {
      expect(ValidationUtil.isValidString("")).toBe(false);
      expect(ValidationUtil.isValidString(" ")).toBe(false);
      expect(ValidationUtil.isValidString("      ")).toBe(false);
      expect(ValidationUtil.isValidString(null)).toBe(false);
      expect(ValidationUtil.isValidString(undefined)).toBe(false);
      expect(ValidationUtil.isValidString(123)).toBe(false);
      expect(ValidationUtil.isValidString(true)).toBe(false);
      expect(ValidationUtil.isValidString(false)).toBe(false);
      expect(ValidationUtil.isValidString([])).toBe(false);
      expect(ValidationUtil.isValidString([1, 3, 5])).toBe(false);
    });
  });

  /**
   * isString()
   */
  describe("isString()函数的测试", () => {
    // 正常系
    it("正常系1", () => {
      expect(ValidationUtil.isString("")).toBe(true);
    });

    it("正常系2", () => {
      expect(ValidationUtil.isString("1")).toBe(true);
    });

    it("正常系3", () => {
      expect(ValidationUtil.isString("abcdAB_@*")).toBe(true);
    });

    // 异常系
    it("异常系1", () => {
      expect(ValidationUtil.isString(1)).toBe(false);
    });

    it("异常系2", () => {
      expect(ValidationUtil.isString([])).toBe(false);
    });

    it("异常系3", () => {
      expect(ValidationUtil.isString(["a", "b"])).toBe(false);
    });

    const boolVal: boolean = true;

    it("异常系4", () => {
      expect(ValidationUtil.isString(boolVal)).toBe(false);
    });

    it("异常系5", () => {
      expect(ValidationUtil.isString(undefined)).toBe(false);
    });

    it("异常系6", () => {
      expect(ValidationUtil.isString(NaN)).toBe(false);
    });
  });

  /**
   * isValidNumber()
   */
  describe("isValidNumber()", () => {
    // 正常系
    it("正常系1", () => {
      expect(ValidationUtil.isValidNumber(0)).toBe(true);
    });

    it("正常系2", () => {
      expect(ValidationUtil.isValidNumber(1)).toBe(true);
    });

    it("正常系3", () => {
      expect(ValidationUtil.isValidNumber(10)).toBe(true);
    });

    //异常系
    it("异常系1", () => {
      expect(ValidationUtil.isValidNumber("")).toBe(false);
    });

    it("异常系2", () => {
      expect(ValidationUtil.isValidNumber(" ")).toBe(false);
    });

    it("异常系3", () => {
      expect(ValidationUtil.isValidNumber("　")).toBe(false);
    });

    it("异常系4", () => {
      expect(ValidationUtil.isValidNumber("_@abA")).toBe(false);
    });
  });

  /**
   * isEmailAddr()
   */
  describe("isEmailAddr()", () => {
    it("应该验证有效邮箱", () => {
      expect(ValidationUtil.isEmailAddr("test@example.com")).toBe(true);
      expect(ValidationUtil.isEmailAddr("user.name+tag@domain.co.uk")).toBe(true);
    });

    it("应该拒绝无效邮箱", () => {
      expect(ValidationUtil.isEmailAddr("test@")).toBe(false);
      expect(ValidationUtil.isEmailAddr("@example.com")).toBe(false);
      expect(ValidationUtil.isEmailAddr("test@.com")).toBe(false);
    });
  });

  /**
   * isPhoneNumber()
   */
  describe("isPhoneNumber()", () => {
    it("应该验证有效中国手机号", () => {
      expect(ValidationUtil.isPhoneNumber("13800138000")).toBe(true);
      expect(ValidationUtil.isPhoneNumber("18612345678")).toBe(true);
    });

    it("应该拒绝无效手机号", () => {
      expect(ValidationUtil.isPhoneNumber("12345678901")).toBe(false);
      expect(ValidationUtil.isPhoneNumber("1380013800")).toBe(false);
      expect(ValidationUtil.isPhoneNumber("23800138000")).toBe(false);
    });
  });

  /**
   * isIDCardNo()
   */
  describe("isIDCardNo()", () => {
    it("有效身份证号", () => {
      expect(ValidationUtil.isIDCardNo("220221193012047790")).toBe(true);
    });
    it("无效身份证号", () => {
      expect(ValidationUtil.isIDCardNo("1234")).toBe(false);
    });
  });
});
