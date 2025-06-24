import { request } from '@/actions/request'

/**
 * GET /api/tags/
 * Get Tags
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getTagsApiTagsGet(params: CMS.TagsGetTagsApiTagsGetParams, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.TagListResponse>(`/api/tags/`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * POST /api/tags/
 * Create Tag
 *
 * 201 Successful Response
 * 422 Validation Error
 */

export async function createTagApiTagsPost(data: CMS.TagCreate, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.TagResponse>(`/api/tags/`, {
    method: 'POST',
    headers,
    data,
    ...restOptions,
  })
}
/**
 * GET /api/tags/${tagId}
 * Get Tag
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getTagApiTagsTagIdGet(params: CMS.TagsGetTagApiTagsTagIdGetParams, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  const { tagId } = params
  return request<CMS.TagResponse>(`/api/tags/${tagId}`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * PUT /api/tags/${tagId}
 * Update Tag
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function updateTagApiTagsTagIdPut(
  data: CMS.TagUpdate,
  params: CMS.TagsUpdateTagApiTagsTagIdPutParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { tagId } = params
  return request<CMS.TagResponse>(`/api/tags/${tagId}`, {
    method: 'PUT',
    headers,
    data,
    params,
    ...restOptions,
  })
}
/**
 * DELETE /api/tags/${tagId}
 * Delete Tag
 *
 * 204 Successful Response
 * 422 Validation Error
 */

export async function deleteTagApiTagsTagIdDelete(params: CMS.TagsDeleteTagApiTagsTagIdDeleteParams, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  const { tagId } = params
  return request<any>(`/api/tags/${tagId}`, {
    method: 'DELETE',
    headers,
    params,
    ...restOptions,
  })
}
