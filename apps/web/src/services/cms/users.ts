import { request } from '@/actions/request'

/**
 * GET /api/users/me
 * Get User Me
 *
 * 200 Successful Response
 */

export async function getUserMeApiUsersMeGet(options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.UserResponse>(`/api/users/me`, {
    method: 'GET',
    headers,
    ...restOptions,
  })
}
/**
 * PUT /api/users/me
 * Update User Me
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function updateUserMeApiUsersMePut(data: CMS.UserUpdate, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.UserResponse>(`/api/users/me`, {
    method: 'PUT',
    headers,
    data,
    ...restOptions,
  })
}
/**
 * GET /api/users/
 * Get Users
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getUsersApiUsersGet(params: CMS.UsersGetUsersApiUsersGetParams, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.UserListResponse>(`/api/users/`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * GET /api/users/${userId}
 * Get User
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getUserApiUsersUserIdGet(params: CMS.UsersGetUserApiUsersUserIdGetParams, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  const { userId } = params
  return request<CMS.UserResponse>(`/api/users/${userId}`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * PUT /api/users/${userId}
 * Update User
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function updateUserApiUsersUserIdPut(
  data: CMS.UserUpdate,
  params: CMS.UsersUpdateUserApiUsersUserIdPutParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { userId } = params
  return request<CMS.UserResponse>(`/api/users/${userId}`, {
    method: 'PUT',
    headers,
    data,
    params,
    ...restOptions,
  })
}
/**
 * DELETE /api/users/${userId}
 * Delete User
 *
 * 204 Successful Response
 * 422 Validation Error
 */

export async function deleteUserApiUsersUserIdDelete(
  params: CMS.UsersDeleteUserApiUsersUserIdDeleteParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { userId } = params
  return request<any>(`/api/users/${userId}`, {
    method: 'DELETE',
    headers,
    params,
    ...restOptions,
  })
}
