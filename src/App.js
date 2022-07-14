import ReactDOM from "react-dom/client";
import UseCallbackHookBad from "./Hook/useCallbackHook/UseCallbackHookBad"
import UseCallbackHookGood from "./Hook/useCallbackHook/UseCallbackHookGood"
import UseMemoHookBad from "./Hook/useMemo/UseMemoHookBad";
import UseMemoHookGood from "./Hook/useMemo/UseMemoHookGood";
import UseRefHookDemo1 from "./Hook/useRefHook/UseRefHookDemo1";
import UseRefHookDemo2 from "./Hook/useRefHook/UseRefHookDemo2";
import UseRefHookDemo3 from "./Hook/useRefHook/UseRefHookDemo3";
import UseContextHookDemoGood from "./Hook/useContextHook/UseContextHookDemoGood"
import { UseReducerHookDemo } from "./Hook/useReducerHook/useReducerHookDemo";
import Example1 from "./Hook/ExampleKhac/example1";
const App = () => {
  console.log('app======begin');
  return (
    <>
      <Example1 />
    </>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
