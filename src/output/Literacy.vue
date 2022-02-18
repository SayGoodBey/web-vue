<template>
  <div>
    <a-collapse v-model:activeKey="activeKey"> </a-collapse>
  </div>
  <App />
</template>

<script lang="tsx" setup>
import { ref } from "vue";
interface ListItem {
  header: string;
  content?: string;
  child?: ListItem[];
}
const list: ListItem[] = [
  {
    header: "标题1",
    content:
      "当使用 <script setup> 的时候，任何在 <script setup> 声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用",
    child: [
      {
        header: "标题1-子标题1",
        content:
          "mport 导入的内容也会以同样的方式暴露。意味着可以在模板表达式中直接使用导入的 helper 函数，并不需要通过 methods 选项来暴露它：",
      },
    ],
  },
  {
    header: "标题222",
    content: "更少的样板内容，更简洁的代码。",
  },
  {
    header: "标题333",
    content:
      "更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)",
  },
];

const activeKey = ref(["1"]);
const App = () => <div>Vue 3.0</div>;
</script>

<style lang="less" scoped></style>
