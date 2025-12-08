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