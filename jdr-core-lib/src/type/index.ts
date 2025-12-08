/**
 * 通用响应类型
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  code?: number;
}

/**
 * 键值对类型
 */
export interface KeyValue<T = any> {
  [key: string]: T;
}

/**
 * 分页参数
 */
export interface PaginationParams {
  page: number;
  pageSize: number;
  total?: number;
}

/**
 * 时间范围
 */
export interface TimeRange {
  startTime: Date | string;
  endTime: Date | string;
}

/**
 * 时间差单位
 */
export enum TimeDiffUnit {
  UNIT_SECONDS, // 秒单位
  UNIT_MILLISCONDS, // 毫秒单位
}
