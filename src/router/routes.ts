import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import AdminView from "@/views/AdminView.vue";
import { ACCESS_ENUM } from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import AboutView from "@/views/AboutView.vue";
import ExampleView from "@/views/ExampleView.vue";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import ManageQuestionView from "@/views/question/ManageQuestionView.vue";
import QuestionView from "@/views/question/QuestionView.vue";
import DoQuestionView from "@/views/question/DoQuestionView.vue";
import QuestionSubmitView from "@/views/question/QuestionSubmitView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "浏览题目",
    component: QuestionView,
  },
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hiddenInMenu: true,
    },
  },
  {
    path: "/example",
    name: "示例页面",
    component: ExampleView,
  },
  {
    path: "/view/question/:id",
    name: "在线做题",
    component: DoQuestionView,
    props: true,
    meta: {
      access: ACCESS_ENUM.USR,
      hiddenInMenu: true,
    },
  },
  {
    path: "/add/question",
    name: "创建题目",
    component: AddQuestionView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
      hiddenInMenu: true,
    },
  },
  {
    path: "/update/question",
    name: "更新题目",
    component: AddQuestionView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
      hiddenInMenu: true,
    },
  },
  {
    path: "/manage/question",
    name: "管理题目",
    component: ManageQuestionView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/question_submit",
    name: "浏览题目提交",
    component: QuestionSubmitView,
    meta: {
      access: ACCESS_ENUM.USR,
    },
  },
  {
    path: "/about",
    name: "关于我",
    component: AboutView,
    meta: {
      hiddenInMenu: true,
      access: ACCESS_ENUM.USR,
    },
  },
  {
    path: "/hide",
    name: "隐藏页面",
    component: HomeView,
    meta: {
      hiddenInMenu: true,
    },
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: UserLoginView,
    meta: {
      hiddenInMenu: true,
    },
  },
  {
    path: "/admin",
    name: "仅管理员可见",
    component: AdminView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
];
