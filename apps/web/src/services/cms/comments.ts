import { request } from '@/actions/request'

/**
 * GET /api/comments/
 * Get Comments
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getCommentsApiCommentsGet(params: CMS.CommentsGetCommentsApiCommentsGetParams, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.CommentListResponse>(`/api/comments/`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * POST /api/comments/
 * Create Comment
 *
 * 201 Successful Response
 * 422 Validation Error
 */

export async function createCommentApiCommentsPost(data: CMS.CommentCreate, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.CommentResponse>(`/api/comments/`, {
    method: 'POST',
    headers,
    data,
    ...restOptions,
  })
}
/**
 * GET /api/comments/${commentId}
 * Get Comment
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getCommentApiCommentsCommentIdGet(
  params: CMS.CommentsGetCommentApiCommentsCommentIdGetParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { commentId } = params
  return request<CMS.CommentResponse>(`/api/comments/${commentId}`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * PUT /api/comments/${commentId}
 * Update Comment
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function updateCommentApiCommentsCommentIdPut(
  data: CMS.CommentUpdate,
  params: CMS.CommentsUpdateCommentApiCommentsCommentIdPutParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { commentId } = params
  return request<CMS.CommentResponse>(`/api/comments/${commentId}`, {
    method: 'PUT',
    headers,
    data,
    params,
    ...restOptions,
  })
}
/**
 * DELETE /api/comments/${commentId}
 * Delete Comment
 *
 * 204 Successful Response
 * 422 Validation Error
 */

export async function deleteCommentApiCommentsCommentIdDelete(
  params: CMS.CommentsDeleteCommentApiCommentsCommentIdDeleteParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { commentId } = params
  return request<any>(`/api/comments/${commentId}`, {
    method: 'DELETE',
    headers,
    params,
    ...restOptions,
  })
}
