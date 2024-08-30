
import Gallery  from "./components/Gallery";
import Profiles from "./components/Profiles";
import TodoList from "./components/TodoList";
import PackagingList from "./components/PackagingList";
import LogIn from "./components/Login";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-7xl font-bold">Learn React</h1>
      <h2 className="text-2xl font-bold mt-4">1. Your First Component</h2>
      <Gallery />

      <h2 className="text-2xl font-bold mt-4">2. To Do List</h2>
      <TodoList />

      <h2 className="text-2xl font-bold mt-4">Passing Props to a Component</h2>
      <Profiles />

      <h2 className="text-2xl font-bold mt-4">Conditional Rendering</h2>
      <LogIn isLoggegIn={true} />

      <h2 className="text-2xl font-bold mt-4">Packaging List</h2>
      <PackagingList />
    </div>
  )
}

export default App;
