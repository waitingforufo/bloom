# jdr-core-lib共同库函数 API文档

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