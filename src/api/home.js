import request from '@/utils/request'
import Vue from 'vue'

export const getMyChannels = () => {
  return request({
    url: 'user/channels'
  })
}

// eslint-disable-next-line camelcase
export const getArticleList = ({ channel_id, timestamp }) => {
  return request({
    url: 'articles',
    params: { channel_id, timestamp }
  })
}

// 频道列表
export const getAllArticleList = () => {
  return request({
    url: 'channels'
  })
}

export const saveChannels = (channels) => {
  return request({
    url: 'user/channels',
    method: 'PUT',
    data: {
      channels
    }
  })
}

const obj = {
  a: function (time) {
    return time
  },
  b: function (time) {
    return time
  },
  c: function (time) {
    return time
  }
}

Object.keys(obj).forEach(key => {
  Vue.filter(key, obj[key])
})
