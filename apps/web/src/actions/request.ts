'use server'

import { headers } from 'next/headers'
import { GenericResponseResult, HttpClient, RequestError, RequestOptions, ResponseCodes } from '@http'

// 創建默認實例（在服務端只會創建一次）
const httpClient = new HttpClient(process.env.NEXT_PUBLIC_API_BASE_URL || '')


// 添加默認的請求攔截器
httpClient.addRequestInterceptor(async (endpoint, config) => {


  config.headers = {
    ...config.headers,
  }
  return config
})

// 添加默認的響應攔截器
httpClient.addResponseInterceptor(
  (response: any) => {
    const result = response as GenericResponseResult

    if (result.code !== ResponseCodes.Success && result.code !== ResponseCodes.ValidationError) {
      console.error(`API 請求失敗（Code: ${result.code}, Message: ${result.message}）`)
      return Promise.reject(new RequestError(result.message, result.code, result.data))
    }

    return response
  },
  (error: { status: number }) => {
    // 處理 404 錯誤（在 Next.js 環境中使用 notFound）
    if (error instanceof RequestError && error.status === 404) {
      // return notFound();
      return Promise.reject(error)
    }
    // 其他錯誤直接拋出
    return Promise.reject(error)
  },
)

/**
 * 進行API請求（向後兼容的函數）
 * @param uri 請求路徑
 * @param opts 請求選項
 * @returns 請求結果
 */
export async function request<T = any>(uri: string, opts: RequestOptions = { method: 'GET' }): Promise<T> {
  return httpClient.request<T>(uri, opts)
}
