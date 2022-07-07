import request from '@/utils/request'

// 根据文章id
export const getArticle = (article_id) => {
  return request({
    url: `/articles/${article_id}`
  })
}

// 关注用户
export const addUser = (target) => {
  return request({
    method: 'POST',
    url: 'user/followings',
    data: {
      target
    }
  })
}

// 取消关注用户
export const delUser = (target) => {
  return request({
    method: 'DELETE',
    url: `user/followings/${target}`
  })
}

// 收藏
export const addCollect = (target) => {
  return request({
    method: 'POST',
    url: 'article/collections',
    data: {
      target
    }
  })
}

// 不收藏
export const delCollect = (target) => {
  return request({
    method: 'DELETE',
    url: `article/collections/${target}`
  })
}

// 点赞
export const addGiveLike = (target) => {
  return request({
    method: 'POST',
    url: 'article/likings',
    data: {
      target
    }
  })
}

// 不点赞
export const delGiveLike = (target) => {
  return request({
    method: 'DELETE',
    url: `article/likings/${target}`
  })
}
