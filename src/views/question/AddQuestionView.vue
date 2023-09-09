<template>
  <a-button @click="router.back" type="outline" status="success">
    <icon-left />
    返回
  </a-button>
  <div style="margin-left: 240px" id="addQuestionView">
    <h2 style="margin-left: 620px">
      {{ updatePage ? "修改题目" : "创建题目" }}
    </h2>
    <a-form :model="form" label-align="right" :on-submit="doSubmit">
      <a-form-item field="title" label="标题: ">
        <a-input
          v-model="form.title"
          placeholder="请输入标题..."
          :style="{ width: '640px' }"
        />
      </a-form-item>
      <a-form-item field="content" label="题目内容: ">
        <md-editor
          mode="split"
          :value="form.content"
          :handle-change="onContentChange"
        />
      </a-form-item>
      <a-form-item field="answer" label="标准答案: ">
        <md-editor
          mode="split"
          :value="form.answer"
          :handle-change="onAnswerChange"
        />
      </a-form-item>
      <a-form-item field="tags" label="标签: ">
        <a-input-tag
          v-model="form.tags"
          :style="{ width: '640px' }"
          placeholder="请输入标签..."
          allow-clear
        />
      </a-form-item>
      <a-form-item label="判题配置" :content-flex="false" :merge-props="false">
        <a-space direction="vertical" style="min-width: 480px">
          <a-form-item field="judgeConfig.timeLimit" label="时间限制: ">
            <a-input-number
              v-model="form.judgeConfig.timeLimit"
              :min="0"
              placeholder="请输入时间限制..."
            />
            ms
          </a-form-item>
          <a-form-item field="judgeConfig.memoryLimit" label="内存限制: ">
            <a-input-number
              v-model="form.judgeConfig.memoryLimit"
              :min="0"
              placeholder="请输入内存限制..."
            />
            KB
          </a-form-item>
          <a-form-item field="judgeConfig.stackLimit" label="堆栈限制: ">
            <a-input-number
              v-model="form.judgeConfig.stackLimit"
              placeholder="请输入堆栈限制..."
              :min="0"
            />
            KB
          </a-form-item>
        </a-space>
      </a-form-item>
      <a-form-item label="测试用例" :content-flex="false" :merge-props="false">
        <a-space direction="vertical">
          <a-form-item
            v-for="(judgeCaseItem, index) of form.judgeCase"
            :key="index"
            no-style
          >
            <a-space direction="vertical" style="min-width: 520px">
              <a-form-item
                :field="`form.judgeCase[${index}].input`"
                :label="`输入用例-${index + 1}`"
                :key="index"
              >
                <a-input
                  v-model="judgeCaseItem.input"
                  placeholder="请填入输入用例..."
                />
              </a-form-item>
              <a-form-item
                :field="`form.judgeCase[${index}].input`"
                :label="`输出用例-${index + 1}`"
                :key="index"
              >
                <a-input
                  v-model="judgeCaseItem.output"
                  placeholder="请填入输出用例..."
                />
              </a-form-item>
            </a-space>
            <a-button
              style="margin-left: 48px; min-width: 116px"
              type="outline"
              status="danger"
              @click="handleDelete(index)"
              >删除
            </a-button>
          </a-form-item>
          <div>
            <a-button
              type="outline"
              status="success"
              @click="handleAdd"
              style="
                float: right;
                margin-bottom: 32px;
                margin-top: 32px;
                margin-left: 570px;
              "
              >新增测试用例
            </a-button>
          </div>
        </a-space>
      </a-form-item>
      <a-form-item>
        <a-button
          @click="doSubmit"
          style="margin: 0 200px; min-width: 200px"
          type="primary"
          >提交
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import { QuestionService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
// 如果页面地址包含 update，视为更新页面
const updatePage = route.path.includes("update");

let form = ref({
  title: "",
  tags: [],
  answer: "",
  content: "",
  judgeConfig: {
    memoryLimit: 1000,
    stackLimit: 1000,
    timeLimit: 1000,
  },
  judgeCase: [
    {
      input: "",
      output: "",
    },
  ],
});

/**
 * 根据题目 id 获取老的数据
 */
const loadData = async () => {
  const id = route.query.id;
  if (!id) {
    return;
  }
  // eslint-disable-next-line
  const res = await QuestionService.getQuestionByIdUsingGet(id as any);
  if (res.code === 0) {
    // eslint-disable-next-line
    form.value = res.data as any;
    // json 转 js 对象
    if (!form.value.judgeCase) {
      form.value.judgeCase = [
        {
          input: "",
          output: "",
        },
      ];
    } else {
      // eslint-disable-next-line
      form.value.judgeCase = JSON.parse(form.value.judgeCase as any);
    }
    if (!form.value.judgeConfig) {
      form.value.judgeConfig = {
        memoryLimit: 1000,
        stackLimit: 1000,
        timeLimit: 1000,
      };
    } else {
      // eslint-disable-next-line
      form.value.judgeConfig = JSON.parse(form.value.judgeConfig as any);
    }
    if (!form.value.tags) {
      form.value.tags = [];
    } else {
      // eslint-disable-next-line
      form.value.tags = JSON.parse(form.value.tags as any);
    }
  } else {
    message.error("加载失败，" + res.msg);
  }
};

onMounted(() => {
  loadData();
});

const doSubmit = async () => {
  // 区分更新还是创建
  if (updatePage) {
    const res = await QuestionService.updateQuestionUsingPost(form.value);
    if (res.code === 0) {
      message.success("更新成功");
      await router.push({
        path: "/manage/question",
        replace: true,
      });
    } else {
      message.error("更新失败，" + res.msg);
    }
  } else {
    const res = await QuestionService.addQuestionUsingPost(form.value);
    if (res.code === 0) {
      message.success("创建成功");
      await router.push({
        path: "/manage/question",
        replace: true,
      });
    } else {
      message.error("创建失败，" + res.msg);
    }
  }
};

/**
 * 新增判题用例
 */
const handleAdd = () => {
  form.value.judgeCase.push({
    input: "",
    output: "",
  });
};

/**
 * 删除判题用例
 */
const handleDelete = (index: number) => {
  form.value.judgeCase.splice(index, 1);
};

const onContentChange = (value: string) => {
  form.value.content = value;
};

const onAnswerChange = (value: string) => {
  form.value.answer = value;
};
</script>

<style scoped></style>
