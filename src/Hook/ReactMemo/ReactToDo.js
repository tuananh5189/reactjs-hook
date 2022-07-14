import { memo } from "react";

// 1.Không sử dụng memo
// const ReactToDo = ({ todos }) => {
//   console.log("ReactToDo child render");
//   return (
//     <>
//       <h2>My ReactToDo</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//     </>
//   );
// };

// export default ReactToDo;
// 2.Có sử dụng memo
const ReactToDo = ({ todos }) => {
  console.log("ReactToDo child render");
  return (
    <>
      <h2>My ReactToDo</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(ReactToDo);