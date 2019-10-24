<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="loginForm" label-width="100px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/api'
import router from '@/router'
import { setToken } from '@/utils/auth'

export default {
  name: 'Login',
  mounted() {

  },
  data() {
    const ckName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
        return
      }
      callback()
    }
    const ckPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
        return
      }
      callback()
    }
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { validator: ckName, trigger: 'blur' }
        ],
        password: [
          { validator: ckPassword, trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const name = this.ruleForm.name
          const password = this.ruleForm.password

          login(name, password).then((response) => {
            const data = response.data.data
            setToken(data.token)
            router.push('/')
          })
        } else {
          console.log('error submit!!')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
