<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="account_form"
        :rules="rules_form"
        @finish="handleFinish"
      >
        <a-form-item name="username">
          <label>用户名</label>
          <a-input v-model:value="account_form.username" type="text" autocomplete="off" />
        </a-form-item>
    
        <a-form-item name="password">
          <label>密码</label>
          <a-input v-model:value="account_form.password" type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input v-model:value="account_form.passwords" type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item name="code">
          <label>验证码</label>
          <a-row :gutter=5>
            <a-col :span="8"><a-input v-model:value="account_form.code" maxlength="6" type="text" autocomplete="off" /></a-col>
            <a-col :span="8"><a-button  type="primary" block>获取验证码</a-button></a-col>
          </a-row>
        </a-form-item> 
        
        <a-form-item>
          <a-button type="primary" html-type="submit" style="width:195px">注册</a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <router-link to="/">登录</router-link>
        <a class="color-white">注册</a>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "vue"
import {checkPhone, checkPassword as password, checkCode as code} from "@/utils/validate.js"
export default {
  name: "Login",
  components: {  },
  setup(props){
    let checkUsername = async (rule,value,callback) => {
      // 校验为空时
      if (!value) {
        return Promise.reject('请输入用户名');// 错误的情况，
      }else if (!checkPhone(value)) {
        return Promise.reject('请输入11位数字的手机号');
      } else {
        return  Promise.reject();
      }
    };
    /**校验密码 */
    let checkPassword = async (rule,value,callback) => {
      const passwords = formConfig.account_form.passwords
      // 校验为空时
      if (!value) {
        return Promise.reject('请输入密码');// 错误的情况，
      }else if (!password(value)) {
        return Promise.reject('请输入8-20位的字母+数字+特殊字符的密码');
      } else if(passwords&&value&&(passwords!==value)){
          return Promise.reject('两次密码不一致');
      } else {
        return  Promise.reject();
      }
    };
     /**校验重置密码 */
    let checkPasswords = async (rule,value,callback) => {
      const pwd = formConfig.account_form.password
      // 校验为空时
      if (!value) {
        return Promise.reject('请再次输入密码');// 错误的情况，
      }else if (!password(value)) {
        return Promise.reject('请输入8-20位的字母+数字+特殊字符的密码');
      } else if(pwd&&value&&(pwd!==value)){
          return Promise.reject('两次密码不一致');
      } else {
        return  Promise.reject();
      }
    };
     /**校验验证码 */
    let checkCode = async (rule,value,callback) => {
      // 校验为空时
      if (!value) {
        return Promise.reject('请输入6位验证码');// 错误的情况，
      }else if (!code(value)) {
        return Promise.reject('请输入6位验证码');
      } else {
        return  Promise.reject();
      }
    };
    const formConfig = reactive({//类似于JSON对象的语法
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      account_form:{
        username:"13676912077",
        password:"1503@cuc",
        passwords:"1503@cuc",
        code:"123eee"
      },
      rules_form:{
        username:[{ validator: checkUsername, trigger: 'blur' }],
        password:[{ validator: checkPassword, trigger: 'blur' }],
        passwords:[{ validator: checkPasswords, trigger: 'blur' }],
        code:[{ validator: checkCode, trigger: 'blur' }]
      }
    })
    const form=toRefs(formConfig)

    // 提交表单
    const handleFinish = (value) => {
      console.log(value)
    }
    onMounted(()=>{})
    return { 
      ...form,
      handleFinish,
    };
  }
}
</script>
<style lang="scss">
@import "./style.scss";

</style>