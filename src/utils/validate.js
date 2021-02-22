/**
 * 手机号验证
 * @param {手机号} value 
 */
export function checkPhone(value){
  let regPhone=/^1[3|4|5|6|7|8|9][0-9]{9}$/;
  return regPhone.test(value)
}
/**
 * 1.密码必须由字母、数字、特殊符号组成，区分大小写
 * 2.特殊符号包含（. _ ~ ! @ # $ ^ & *）
 * 3.密码长度为8-20位
 */
export function checkPassword(value){
  let regPassword=/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,20}$/
  return regPassword.test(value)
}

/**
 * 
 */
export function checkCode(value){
  let regCode=/^[a-zA-Z0-9]{6}$/
  return regCode.test(value)
}