<template>
  <div class="log-container max-w-3xl mx-auto rounded-4xl">
    <div class="log-form mx-auto rounded-4xl ">
      <h1 class="font-sans font-bold text-4xl log-title">{{ $t('welcome login') }}</h1>
      <label class="font-sans font-bold"
        >{{ $t('account')}}<el-input v-model="account" label="account" type="text" clearable /></label><br />
      <label class="font-sans font-bold"
        >{{ $t('password') }}<el-input v-model="password" type="password" class="pb-3" clearable show-password
      /></label>
      <center>
        <el-button type="primary" class="font-sans font-bold" round @click="handleRegister">{{
          $t('register')
        }}</el-button>
        <el-button type="primary" class="font-sans font-bold" round @click="$router.push('register')">{{ $t('login') }}</el-button>
      </center>
        </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineComponent } from 'vue'

const account = ref('')
const password = ref('')
const router = useRouter()
const route = useRoute()
const handleRegister = () => {
  router.push({ name: 'register' })
}
const handleLogin = () => {
  router.push({
    name: 'hello',
    query: {},
  })
}


</script>
<style lang="scss" scoped>
@media screen and (max-width:600px){
  .el-input{
    float: center;
  }
}
.log-container {
  display: block;
  height: 50vh;
  width: 50vm;
  overflow: hidden;
  padding: 10vm;
  margin-top: 25vh;
  position: relative;
  border-radius: 80px;
  box-shadow: 5px 5px 13px #8a8a8a, -5px -5px 13px #ffffff;

  .log-form {
    width: 90%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .log-title {
      overflow: hidden;
      margin: 3% auto 1.5% auto;
    }
    label {
      display: inline-block;
      min-width: 100%;
      margin: 1.5% auto;
      text-align: center;
      .el-input {
        float: right;
        margin-left: 2%;
      }
      }
    }
  }

</style>
