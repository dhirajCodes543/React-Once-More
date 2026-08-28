import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-screen flex flex-col  justify-center h-auto">
        <div className="w-auto flex justify-center">
        <AddTodo />
        </div>
        <Todos />
      </div>
    </>
  );
}

export default App;
