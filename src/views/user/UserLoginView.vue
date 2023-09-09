<template>
  <div class="userLoginView">
    <h2 style="margin-bottom: 16px">用户登录</h2>
    <a-form
      :model="form"
      @submit="handleSubmit"
      label-align="left"
      auto-label-width
      style="max-width: 480px; margin: 0 auto"
    >
      <a-form-item
        :rules="[
          { required: true, message: '账号不能为空' },
          { minLength: 4, message: '账号长度不能低于四位' },
        ]"
        field="userAccount"
        label="账号 :"
      >
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item
        :rules="[
          { required: true, message: '密码不能为空' },
          { minLength: 6, message: '密码长度不能低于六位' },
        ]"
        field="userPassword"
        tooltip="密码不少于6位"
        label="密码 :"
      >
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="margin: 0 auto">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import { Message } from "@arco-design/web-vue";
import store from "@/store";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive<UserLoginRequest>({
  userAccount: "",
  userPassword: "",
});
const handleSubmit = async () => {
  if (form.userAccount.length < 4 || form.userPassword.length < 6) {
    return;
  }
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    Message.success(
      `登录成功！欢迎${
        res.data.userName ? `【${res.data.userName}】` : ""
      }来到Open Judge系统`
    );
    await store.dispatch("getLoginUser");
    await router.push({
      path: "/",
      replace: true,
    });
  } else {
    Message.error(res.msg);
  }
};
</script>
