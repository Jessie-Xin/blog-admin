import { request } from '@/actions/request'

/**
 * GET /api/dashboard/summary
 * Get Summary
 *
 * 200 Successful Response
 */

export async function getSummaryApiDashboardSummaryGet(options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.DashboardSummary>(`/api/dashboard/summary`, {
    method: 'GET',
    headers,
    ...restOptions,
  })
}
