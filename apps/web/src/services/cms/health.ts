import { request } from '@/actions/request'

/**
 * GET /
 * Health Check
 *
 * 200 Successful Response
 */

export async function check__get(options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<any>(`/`, {
    method: 'GET',
    headers,
    ...restOptions,
  })
}
