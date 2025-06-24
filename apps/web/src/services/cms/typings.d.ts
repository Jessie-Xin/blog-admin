declare namespace CMS {
  type BodyLoginForAccessTokenApiAuthTokenPost = {
    grant_type?: any
    username: string
    password: string
    scope?: string
    client_id?: any
    client_secret?: any
  }

  type CategoryCreate = {
    name: string
    description?: any
  }

  type CategoryListResponse = {
    total: number
    categories: CMS.CategoryResponse[]
  }

  type CategoryResponse = {
    name: string
    description?: any
    id: number
    created_at: string
    updated_at: string
  }

  type CategoryUpdate = {
    name?: any
    description?: any
  }

  type CommentCreate = {
    content: string
    post_id: number
  }

  type CommentListResponse = {
    total: number
    comments: CMS.CommentResponse[]
  }

  type CommentResponse = {
    content: string
    id: number
    created_at: string
    updated_at: string
    author: CMS.UserResponse
    post_id: number
  }

  type CommentUpdate = {
    content: string
  }

  type DashboardSummary = {
    total_posts: number
    total_categories: number
    total_tags: number
    total_comments: number
    total_users: number
    recent_posts: CMS.PostBrief[]
    recent_comments: CMS.CommentResponse[]
  }

  type HTTPValidationError = {
    detail?: CMS.ValidationError[]
  }

  type PostBrief = {
    id: number
    title: string
    summary?: any
    published: boolean
    created_at: string
    updated_at: string
    author_id: number
  }

  type PostCreate = {
    title: string
    content_markdown: string
    summary?: any
    published?: boolean
    category_id?: any
    tag_ids?: number[]
  }

  type PostListResponse = {
    total: number
    posts: CMS.PostBrief[]
  }

  type PostResponse = {
    title: string
    content_markdown: string
    summary?: any
    published?: boolean
    id: number
    content_html: string
    created_at: string
    updated_at: string
    author: CMS.UserResponse
    category?: any
    tags?: CMS.TagResponse[]
  }

  type PostUpdate = {
    title?: any
    content_markdown?: any
    summary?: any
    published?: any
    category_id?: any
    tag_ids?: any
  }

  type TagCreate = {
    name: string
  }

  type TagListResponse = {
    total: number
    tags: CMS.TagResponse[]
  }

  type TagResponse = {
    name: string
    id: number
    created_at: string
  }

  type TagUpdate = {
    name: string
  }

  type Token = {
    access_token: string
    token_type?: string
  }

  type UserCreate = {
    username: string
    email: string
    is_active?: boolean
    is_admin?: boolean
    password: string
  }

  type UserListResponse = {
    total: number
    users: CMS.UserResponse[]
  }

  type UserResponse = {
    username: string
    email: string
    is_active?: boolean
    is_admin?: boolean
    id: number
    created_at: string
    updated_at: string
  }

  type UserUpdate = {
    username?: any
    email?: any
    password?: any
    is_active?: any
    is_admin?: any
  }

  type ValidationError = {
    loc: any[]
    msg: string
    type: string
  }

  type UsersGetUsersApiUsersGetParams = {
    skip?: number
    limit?: number
  }

  type UsersGetUserApiUsersUserIdGetParams = {
    userId: number
  }

  type UsersUpdateUserApiUsersUserIdPutParams = {
    userId: number
  }

  type UsersDeleteUserApiUsersUserIdDeleteParams = {
    userId: number
  }

  type CategoriesGetCategoriesApiCategoriesGetParams = {
    skip?: number
    limit?: number
  }

  type CategoriesGetCategoryApiCategoriesCategoryIdGetParams = {
    categoryId: number
  }

  type CategoriesUpdateCategoryApiCategoriesCategoryIdPutParams = {
    categoryId: number
  }

  type CategoriesDeleteCategoryApiCategoriesCategoryIdDeleteParams = {
    categoryId: number
  }

  type TagsGetTagsApiTagsGetParams = {
    skip?: number
    limit?: number
  }

  type TagsGetTagApiTagsTagIdGetParams = {
    tagId: number
  }

  type TagsUpdateTagApiTagsTagIdPutParams = {
    tagId: number
  }

  type TagsDeleteTagApiTagsTagIdDeleteParams = {
    tagId: number
  }

  type PostsGetPostsApiPostsGetParams = {
    skip?: number
    limit?: number
    search?: any
    categoryId?: any
    tagId?: any
    published?: any
  }

  type PostsGetPostApiPostsPostIdGetParams = {
    postId: number
  }

  type PostsUpdatePostApiPostsPostIdPutParams = {
    postId: number
  }

  type PostsDeletePostApiPostsPostIdDeleteParams = {
    postId: number
  }

  type CommentsGetCommentsApiCommentsGetParams = {
    skip?: number
    limit?: number
    postId?: number
  }

  type CommentsGetCommentApiCommentsCommentIdGetParams = {
    commentId: number
  }

  type CommentsUpdateCommentApiCommentsCommentIdPutParams = {
    commentId: number
  }

  type CommentsDeleteCommentApiCommentsCommentIdDeleteParams = {
    commentId: number
  }
}
