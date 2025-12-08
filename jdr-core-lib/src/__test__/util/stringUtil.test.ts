import { StringUtil } from "../../util/stringUtil";

describe("StringUtil类的测试", () => {
  /**
   * randomStr()
   */
  describe("randomStr()", () => {
    it("应该生成指定长度的随机字符串", () => {
      const result = StringUtil.randomStr(10);

      expect(result).toHaveLength(10);
      expect(typeof result).toBe("string");
    });

    it("应该使用默认字符集生成随机字符串", () => {
      const result = StringUtil.randomStr(8);
      const defaultCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      // 检查每个字符都在字符集中
      for (const char of result) {
        expect(defaultCharset).toContain(char);
      }
    });

    it("应该使用自定义字符集生成随机字符串", () => {
      const customCharset = "ABC123";
      const result = StringUtil.randomStr(20, customCharset);

      // 检查每个字符都在自定义字符集中
      for (const char of result) {
        expect(customCharset).toContain(char);
      }
    });

    it("应该生成不同长度的字符串", () => {
      const lengths = [1, 5, 10, 50, 100];

      for (const length of lengths) {
        const result = StringUtil.randomStr(length);
        expect(result).toHaveLength(length);
      }
    });

    it("应该生成不同的随机字符串（至少大部分不同）", () => {
      const results = new Set<string>();

      // 生成100个随机字符串
      for (let i = 0; i < 100; i++) {
        results.add(StringUtil.randomStr(10));
      }

      // 至少应该有90%是不同的（由于随机性，允许少量重复）
      expect(results.size).toBeGreaterThan(90);
    });

    // 额外边界和错误状况
    it("random方法应该处理长度为0的情况", () => {
      expect(StringUtil.randomStr(0)).toBe("");
    });

    it("random方法应该处理负长度（返回空字符串）", () => {
      expect(StringUtil.randomStr(-5)).toBe("");
    });
  });

  /**
   * truncate()
   */
  describe("truncate()", () => {
    it("应该截断超过最大长度的字符串", () => {
      const longString = "这是一个非常长的字符串，需要被截断";
      const result = StringUtil.truncate(longString, 10);

      expect(result).toHaveLength(10 + "...".length);
      expect(result).toMatch(/\.\.\.$/);
    });

    it("不应该截断短于最大长度的字符串", () => {
      const shortString = "短字符串";
      const result = StringUtil.truncate(shortString, 20);

      expect(result).toBe(shortString);
      expect(result).not.toMatch(/\.\.\.$/);
    });

    it("应该使用自定义后缀", () => {
      const longString = "这是一个需要截断的字符串";
      const result = StringUtil.truncate(longString, 5, "***");

      expect(result).toHaveLength(5 + "***".length);
      expect(result).toMatch(/\*\*\*$/);
      expect(result).toBe("这是一***");
    });

    it("应该正确处理边界情况", () => {
      // 正好等于最大长度
      const exactString = "正好十个字正好十个字";
      expect(StringUtil.truncate(exactString, 10)).toBe(exactString);

      // 空字符串
      expect(StringUtil.truncate("", 5)).toBe("");

      // 只有空格
      expect(StringUtil.truncate("   ", 2)).toBe("   ");
    });

    it("应该正确处理中文字符和英文混合", () => {
      const mixedString = "Hello你好World世界";
      const result = StringUtil.truncate(mixedString, 8);

      // 注意：JavaScript中中文也是按一个字符计算
      expect(result).toHaveLength(8 + "...".length);
      expect(result).toBe("Hello你...");
    });

    // 额外边界和错误状况
    it("truncate方法应该处理最大长度为0的情况", () => {
      expect(StringUtil.truncate("测试", 0)).toBe("...");
      expect(StringUtil.truncate("测试", 0, "***")).toBe("***");
    });

    it("truncate方法应该处理最大长度为负数的情况（返回空后缀）", () => {
      expect(StringUtil.truncate("测试", -5)).toBe("...");
      expect(StringUtil.truncate("测试", -5, "***")).toBe("***");
    });
  });

  /**
   * camelToSnake()
   */
  describe("camelToSnake", () => {
    it("应该转换驼峰命名到下划线命名", () => {
      expect(StringUtil.camelToSnake("camelCase")).toBe("camel_case");
      expect(StringUtil.camelToSnake("userName")).toBe("user_name");
      expect(StringUtil.camelToSnake("HTTPRequest")).toBe("_h_t_t_p_request");
    });

    it("应该处理连续大写字母", () => {
      expect(StringUtil.camelToSnake("XMLHTTPRequest")).toBe("_x_m_l_h_t_t_p_request");
      expect(StringUtil.camelToSnake("JSONData")).toBe("_j_s_o_n_data");
    });

    it("应该处理边界情况", () => {
      expect(StringUtil.camelToSnake("")).toBe("");
      expect(StringUtil.camelToSnake("single")).toBe("single");
      expect(StringUtil.camelToSnake("ALLCAPS")).toBe("_a_l_l_c_a_p_s");
    });

    it("应该保留数字", () => {
      expect(StringUtil.camelToSnake("user1Name")).toBe("user1_name");
      expect(StringUtil.camelToSnake("item2Data")).toBe("item2_data");
    });
  });

  /**
   * snakeToCamel()
   */
  describe("snakeToCamel", () => {
    /**
     * TODO: JDR bug
     */
    /* 
    it("应该转换下划线命名到驼峰命名", () => {
      expect(StringUtil.snakeToCamel("snake_case")).toBe("snakeCase");
      expect(StringUtil.snakeToCamel("user_name")).toBe("userName");
      expect(StringUtil.snakeToCamel("first_name_last_name")).toBe("firstNameLastName");
    });

    it("应该处理多个连续下划线", () => {
      expect(StringUtil.snakeToCamel("user__name")).toBe("userName");
      expect(StringUtil.snakeToCamel("first___last")).toBe("firstLast");
    });

    it("应该处理边界情况", () => {
      expect(StringUtil.snakeToCamel("")).toBe("");
      expect(StringUtil.snakeToCamel("single")).toBe("single");
      expect(StringUtil.snakeToCamel("_start_with_underscore")).toBe("StartWithUnderscore");
      expect(StringUtil.snakeToCamel("end_with_underscore_")).toBe("endWithUnderscore");
    });

    it("应该保留数字", () => {
      expect(StringUtil.snakeToCamel("user_1_name")).toBe("user1Name");
      expect(StringUtil.snakeToCamel("data_2023_summary")).toBe("data2023Summary");
    }); 
    */
    // TODO:JDR 没有互逆 需要调查
    /*
    it("应该与camelToSnake互逆", () => {
      const testCases = ["camelCase", "userName", "jsonData", "xmlHttpRequest", "test123Name"];

      for (const camelCase of testCases) {
        const snakeCase = StringUtil.camelToSnake(camelCase);
        const convertedBack = StringUtil.snakeToCamel(snakeCase);

        // 注意：由于连续大写字母的处理，可能不是完全互逆
        // 所以我们只检查简单的互逆性
        if (!/^[A-Z]+/.test(camelCase)) {
          // 对于不以大写字母开头的字符串，应该是互逆的
          const normalizedCamel = camelCase.charAt(0).toLowerCase() + camelCase.slice(1);
          const normalizedConverted = convertedBack.charAt(0).toLowerCase() + convertedBack.slice(1);
          expect(normalizedConverted).toBe(normalizedCamel);
        }
      }
    });
    */
  });
});
