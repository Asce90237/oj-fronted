<template>
  <code-editor :value="codeValue" :handle-change="onCodeChange" />
  <md-editor :value="mdValue" :handle-change="onMdChange" />
</template>
<script setup lang="ts">
import MdEditor from "@/components/MdEditor.vue";
import { ref } from "vue";
import CodeEditor from "@/components/CodeEditor.vue";

const mdValue = ref<string>("");
const onMdChange = (v: string) => {
  mdValue.value = v;
};

const codeValue = ref<string>(
  "// 请输入你的代码...\n" + "public void solution() {\n" + "    \n" + "}"
);
const onCodeChange = (v: string) => {
  codeValue.value = v;
};
</script>

<style scoped></style>
