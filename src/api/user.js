import request from '@/utils/request'

export const getSmsCode = (mobile) => {
  return request({
    url: `/sms/codes/${mobile}`
  })
}

/**
 *
 * @param {mobile,code} data
 * @returns
 */
export const login = (data) => {
  return request({
    type: 'POST',
    url: '/authorizations',
    data
  })
}
