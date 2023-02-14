import './App.css';
import TodoList from "./components/Todo/TodoList";
import Today from "./components/Today/Today";
import Title from "./components/Title/Title";
import Menu from "./components/Menu/Menu";
import Hydration from "./components/Hydration/Hydration";
import Notes from "./components/Notes/Notes";
import {Box, Grid} from "@mui/material";

function App() {

  return (
    <div className="App">
        <Today />
        <Box sx={{ width: '100%'}}>
            <Grid container rowSpacing={10} columnSpacing={15}>
                <Grid item xs={6}>
                    <>
                        <Title title="Tasks" />
                        <TodoList moduleName={"tasks"} />
                    </>
                </Grid>
                <Grid item xs={6}>
                    <>
                        <Title title="Goals" />
                        <TodoList moduleName={"goals"} />
                    </>
                </Grid>
                <Grid item xs={6} className="planner-grid-item food-item">
                    <>
                        <Title title="Menu" />
                        <Menu />
                    </>
                </Grid>
                <Grid item xs={6}>
                    <>
                        <Title title="Notes" />
                        <Notes />
                    </>
                </Grid>
                <Grid item xs={6}>
                    <>
                        <Title title="Hydration" />
                        <Hydration />
                    </>
                </Grid>
                <Grid item xs={6}>
                    <>
                        <Title title="Excercise" />
                        <TodoList moduleName={"excercise"} />
                    </>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default App
