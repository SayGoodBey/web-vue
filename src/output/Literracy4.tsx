// TsxTest.tsx
import {
  FunctionalComponent as FC,
  defineComponent,
  reactive,
  onMounted,
} from "vue";

// 无状态组件
const FcNode: FC<{ data: number }> = ({ data }) => {
  return (
    <>
      <hr />
      <div>
        子组件：
        {data < 10 ? <span>{data}</span> : <h1>{data}</h1>}
      </div>
    </>
  );
};

// 状态组件需要使用 defineComponent
export default defineComponent({
  name: "TsxTest",
  setup() {
    const data = reactive({ count: 0 });

    onMounted(() => {
      data.count = 5;
    });

    const clickHandler = () => data.count++;

    return () => (
      <>
        <span style={{ marginRight: "10px" }}>{data.count}</span>
        <button onClick={clickHandler}>+</button>
        <FcNode data={data.count} />
      </>
    );
  },
});
