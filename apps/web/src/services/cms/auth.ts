import { request } from '@/actions/request'

/**
 * POST /api/auth/token
 * Login For Access Token
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function loginForAccessTokenApiAuthTokenPost(
  data: CMS.BodyLoginForAccessTokenApiAuthTokenPost,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.Token>(`/api/auth/token`, {
    method: 'POST',
    headers,
    data,
    ...restOptions,
  })
}
/**
 * POST /api/auth/register
 * Register User
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function registerUserApiAuthRegisterPost(data: CMS.UserCreate, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.UserResponse>(`/api/auth/register`, {
    method: 'POST',
    headers,
    data,
    ...restOptions,
  })
}
