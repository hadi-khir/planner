import TodoListEntry from "./TodoListEntry";
import TodoListInput from "./TodoListInput";
import {FunctionComponent, useEffect, useRef, useState} from "react";

const TodoList: FunctionComponent<any> = ({moduleName}) => {
    const [todoEntries, setTodoEntries] : any = useState([]);
    const [newEntry, setNewEntry] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (localStorage.getItem(moduleName)) {
            const localStorageValue = localStorage.getItem(moduleName);
            if (localStorageValue) {
                setTodoEntries(JSON.parse(localStorageValue));
            }
        }
    }, []);

    const handleAdd = () => {

        let newAdd = {
            id: todoEntries.length + 1,
            text: newEntry,
            checked: false
        }

        const entries = todoEntries.slice();
        entries.push(newAdd);
        setTodoEntries([...todoEntries, newAdd]);

        localStorage.setItem(moduleName, JSON.stringify(entries));

        if (inputRef.current){
            // @ts-ignore
            inputRef.current.value = "";
        }
    }

    const handleChecked = (updatedEntry: { id: number, text: string, checked: boolean }) => {

        updatedEntry.checked = !updatedEntry.checked;

        let entries = todoEntries.slice();
        let filtered = entries.filter((entry: { id: number, text: string, checked: boolean }) => entry.id !== updatedEntry.id);
        filtered.push(updatedEntry);
        setTodoEntries(filtered);

        localStorage.setItem(moduleName, JSON.stringify(filtered));
    }

    return (
            <>
                <TodoListEntry entries={todoEntries} handleChecked={handleChecked} />
                <TodoListInput entriesCallback={setNewEntry} handleAdd={handleAdd} ref={inputRef} />
            </>
            );
}

export default TodoList;