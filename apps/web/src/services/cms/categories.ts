import { request } from '@/actions/request'

/**
 * GET /api/categories/
 * Get Categories
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getCategoriesApiCategoriesGet(
  params: CMS.CategoriesGetCategoriesApiCategoriesGetParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.CategoryListResponse>(`/api/categories/`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * POST /api/categories/
 * Create Category
 *
 * 201 Successful Response
 * 422 Validation Error
 */

export async function createCategoryApiCategoriesPost(data: CMS.CategoryCreate, options?: { [key: string]: any }) {
  const { headers, ...restOptions } = options || {}

  return request<CMS.CategoryResponse>(`/api/categories/`, {
    method: 'POST',
    headers,
    data,
    ...restOptions,
  })
}
/**
 * GET /api/categories/${categoryId}
 * Get Category
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function getCategoryApiCategoriesCategoryIdGet(
  params: CMS.CategoriesGetCategoryApiCategoriesCategoryIdGetParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { categoryId } = params
  return request<CMS.CategoryResponse>(`/api/categories/${categoryId}`, {
    method: 'GET',
    headers,
    params,
    ...restOptions,
  })
}
/**
 * PUT /api/categories/${categoryId}
 * Update Category
 *
 * 200 Successful Response
 * 422 Validation Error
 */

export async function updateCategoryApiCategoriesCategoryIdPut(
  data: CMS.CategoryUpdate,
  params: CMS.CategoriesUpdateCategoryApiCategoriesCategoryIdPutParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { categoryId } = params
  return request<CMS.CategoryResponse>(`/api/categories/${categoryId}`, {
    method: 'PUT',
    headers,
    data,
    params,
    ...restOptions,
  })
}
/**
 * DELETE /api/categories/${categoryId}
 * Delete Category
 *
 * 204 Successful Response
 * 422 Validation Error
 */

export async function deleteCategoryApiCategoriesCategoryIdDelete(
  params: CMS.CategoriesDeleteCategoryApiCategoriesCategoryIdDeleteParams,
  options?: { [key: string]: any },
) {
  const { headers, ...restOptions } = options || {}

  const { categoryId } = params
  return request<any>(`/api/categories/${categoryId}`, {
    method: 'DELETE',
    headers,
    params,
    ...restOptions,
  })
}
