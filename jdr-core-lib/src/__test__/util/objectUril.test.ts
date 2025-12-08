import { ObjectUtil } from "../../util/objectUtil";

describe("ObjectUtil类的测试", () => {
  /**
   * deepClone()
   */
  describe("deepClone()", () => {
    //
    it("test - 1: 传入null", () => {
      const obj = null;
      expect(ObjectUtil.deepClone(obj)).toBe(null);
    });

    it("应该深拷贝对象", () => {
      const original = {
        name: "John",
        address: {
          city: "Beijing",
          zip: "100000",
        },
        tags: ["tag1", "tag2"],
      };

      const cloned = ObjectUtil.deepClone(original);

      expect(cloned).toEqual(original); // 内容比较，相同内容即OK
      expect(cloned).not.toBe(original); // 地址不同（因为深度拷贝是生成新对象）
      expect(cloned.address).not.toBe(original.address);
      expect(cloned.tags).not.toBe(original.tags);
    });

    it("应该处理日期和数组", () => {
      const date = new Date();
      const original = { date, numbers: [1, 2, 3] };
      const cloned = ObjectUtil.deepClone(original);

      expect(cloned.date).toBeInstanceOf(Date);
      expect(cloned.date.getTime()).toBe(date.getTime());
      expect(cloned.date).not.toBe(date);
      expect(cloned.numbers).toEqual([1, 2, 3]);
      expect(cloned.numbers).not.toBe(original.numbers);
    });

    let a;
    it("传参为undefined的时候", () => {
      expect(ObjectUtil.deepClone(a)).toBeUndefined();
    });

    let b = true;
    it("传参为boolean的时候", () => {
      expect(ObjectUtil.deepClone(b)).toBeTruthy();
    });
  });

  /**
   * merge()
   */
  describe("merge()", () => {
    it("test - 1: merge", () => {
      //
      const obj1 = { name: "JDR1" };
      const obj2 = { name: "JDR2", addr: "DL" };

      expect(ObjectUtil.merge(obj1, obj2)).toEqual({ name: "JDR2", addr: "DL" });
    });
  });

  /**
   * isEmpty()
   */
  describe("isEmpty()", () => {
    it("应该检查对象是否为空", () => {
      expect(ObjectUtil.isEmpty({})).toBe(true);
      expect(ObjectUtil.isEmpty({ name: "John" })).toBe(false);
      expect(ObjectUtil.isEmpty(null as any)).toBe(true);
      expect(ObjectUtil.isEmpty(undefined as any)).toBe(true);
    });
  });
});
