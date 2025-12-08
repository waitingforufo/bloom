/**
 * 错误码常量
 */
export const ErrorCode = {
  // 通用错误
  SUCCESS: 0,
  UNKNOWN_ERROR: 1000,
  PARAM_ERROR: 1001,
  VALIDATION_ERROR: 1002,

  // 业务错误
  NOT_FOUND: 2000,
  UNAUTHORIZED: 2001,
  FORBIDDEN: 2002,

  // 系统错误
  INTERNAL_ERROR: 5000,
  SERVICE_UNAVAILABLE: 5001,
} as const;

/**
 * 错误消息常量
 */
export const ErrorMessage = {
  [ErrorCode.SUCCESS]: "成功",
  [ErrorCode.UNKNOWN_ERROR]: "未知错误",
  [ErrorCode.PARAM_ERROR]: "参数错误",
  [ErrorCode.VALIDATION_ERROR]: "验证失败",
  [ErrorCode.NOT_FOUND]: "资源不存在",
  [ErrorCode.UNAUTHORIZED]: "未授权",
  [ErrorCode.FORBIDDEN]: "禁止访问",
  [ErrorCode.INTERNAL_ERROR]: "内部错误",
  [ErrorCode.SERVICE_UNAVAILABLE]: "服务不可用",
};
