import TodoListEntry from "./TodoListEntry";
import TodoListInput from "./TodoListInput";
import {FunctionComponent, useEffect, useState} from "react";

const TodoList: FunctionComponent<any> = ({moduleName}) => {
    const [todoEntries, setTodoEntries] : any = useState([]);
    const [newEntry, setNewEntry] = useState("");

    useEffect(() => {
        if (localStorage.getItem(moduleName)) {
            let localStorageValue = localStorage.getItem(moduleName);
            // @ts-ignore
        }
    }, []);

    const handleAdd = () => {

        let newAdd = {
            entry: newEntry,
            checked: false
        }

        setTodoEntries([...todoEntries, newAdd]);

        // @ts-ignore
        localStorage.setItem(moduleName, [...todoEntries, newAdd]);
    }

    return (
            <>
                <TodoListEntry entries={todoEntries} />
                <TodoListInput entriesCallback={setNewEntry} handleAdd={handleAdd} />
            </>
            );
}

export default TodoList;