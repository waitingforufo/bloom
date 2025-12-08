# jdr-core-lib

TypeScript 共通函数库，包含常用的工具函数和实用工具类。

## 安装

```bash
npm install jdr-core-lib
# 或
yarn add jdr-core-lib
```

# 使用示例
```typescript
import { 
  ValidationUtils, 
  DateUtils, 
  createSuccessResponse,
  createErrorResponse,
  ErrorCodes 
} from 'jdr-core-lib';

// 验证邮箱
console.log(ValidationUtils.isEmail('test@example.com')); // true

// 格式化日期
console.log(DateUtils.format(new Date(), 'YYYY-MM-DD HH:mm:ss'));

// 创建响应
const success = createSuccessResponse({ id: 1 });
const error = createErrorResponse('参数错误', ErrorCodes.PARAM_ERROR);
```

# API 文档
## 验证工具 (ValidationUtils)
isValidString(str): boolean - 检查有效字符串

isEmail(email): boolean - 验证邮箱格式

isChinesePhone(phone): boolean - 验证中国手机号

## 日期工具 (DateUtils)
format(date, format): string - 格式化日期

getRelativeTime(date): string - 获取相对时间

isValidTimeRange(timeRange): boolean - 验证时间范围

## 对象工具 (ObjectUtils)
deepClone(obj): T - 深拷贝对象

merge(...objects): T - 合并对象

isEmpty(obj): boolean - 检查空对象

## 字符串工具 (StringUtils)
random(length, chars): string - 生成随机字符串

truncate(str, maxLength, suffix): string - 截断字符串

camelToSnake(camelCase): string - 驼峰转下划线

## 工具函数
createSuccessResponse(data) - 创建成功响应

createErrorResponse(error, code, data) - 创建错误响应

delay(ms): Promise - 延迟函数

debounce(func, wait) - 防抖函数

throttle(func, limit) - 节流函数

# 开发
```bash
# 克隆项目
git clone https://github.com/yourusername/jdr-core-lib.git

# 安装依赖
npm install

# 构建
npm run build

# 测试
npm test

# 测试覆盖率
npm run test:coverage

# 开发模式（监听变化）
npm run build:watch
```

**更新 package.json 中的 scripts:**
```json
{
  "scripts": {
    "build": "node scripts/build.js",
    // ... 其他脚本
  }
}
```