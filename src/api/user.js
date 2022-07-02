
import request from '@/utils/request'
// 只有在vue组件中文件才能使用this.$store
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
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data: {
      mobile,
      code
    }
  })
}

// 获取用户个人资料
export const getUserInfo = () => {
  return request({
    url: 'user'
  })
}
