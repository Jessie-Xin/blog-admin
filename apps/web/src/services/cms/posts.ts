import { request } from '@/actions/request'

/**
 * GET /api/posts/
 * Get Posts
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getPostsApiPostsGet(params: CMS.PostsGetPostsApiPostsGetParams, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.PostListResponse>(`/api/posts/`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * POST /api/posts/
 * Create Post
 *
 * 201 Successful Response
 * 422 Validation Error
 */

export async function createPostApiPostsPost(data: CMS.PostCreate, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.PostResponse>(`/api/posts/`, {
    method: 'POST',
    headers,
    data,
    ...restOptions,
  })
}
/**
 * GET /api/posts/${postId}
 * Get Post
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getPostApiPostsPostIdGet(params: CMS.PostsGetPostApiPostsPostIdGetParams, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  const { postId } = params
  return request<CMS.PostResponse>(`/api/posts/${postId}`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * PUT /api/posts/${postId}
 * Update Post
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function updatePostApiPostsPostIdPut(
  data: CMS.PostUpdate,
  params: CMS.PostsUpdatePostApiPostsPostIdPutParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { postId } = params
  return request<CMS.PostResponse>(`/api/posts/${postId}`, {
    method: 'PUT',
    headers,
    data,
    params,
    ...restOptions,
  })
}
/**
 * DELETE /api/posts/${postId}
 * Delete Post
 *
 * 204 Successful Response
 * 422 Validation Error
 */

export async function deletePostApiPostsPostIdDelete(
  params: CMS.PostsDeletePostApiPostsPostIdDeleteParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { postId } = params
  return request<any>(`/api/posts/${postId}`, {
    method: 'DELETE',
    headers,
    params,
    ...restOptions,
  })
}
