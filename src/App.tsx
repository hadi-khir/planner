import './App.css';
import TodoList from "./components/Todo/TodoList";
import Today from "./components/Today/Today";
import Title from "./components/Title/Title";
import Menu from "./components/Menu/Menu";
import Hydration from "./components/Hydration/Hydration";
import Notes from "./components/Notes/Notes";

function App() {

  return (
    <div className="App">
        <Today />
        <div className="planner-grid-container">
            <div className="planner-grid-item tasks-item">
                <>
                    <Title title="Tasks" />
                    <TodoList moduleName={"tasks"} />
                </>
            </div>
            <div className="planner-grid-item goals-item">
                <>
                    <Title title="Goals" />
                    <TodoList moduleName={"goals"} />
                </>
            </div>
            <div className="planner-grid-item food-item">
                <>
                    <Title title="Menu" />
                    <Menu />
                </>
            </div>
            <div className="planner-grid-item notes-item">
                <>
                    <Title title="Notes" />
                    <Notes />
                </>
            </div>
            <div className="planner-grid-item hydration-item">
                <>
                    <Title title="Hydration" />
                    <Hydration />
                </>
            </div>
            <div className="planner-grid-item excercise-item">
                <>
                    <Title title="Excercise" />
                    <TodoList moduleName={"excercise"} />
                </>
            </div>
        </div>
    </div>
  )
}

export default App
