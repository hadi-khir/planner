import TodoListEntry from "./TodoListEntry";
import TodoListInput from "./TodoListInput";
import {FunctionComponent, useEffect, useState} from "react";

const TodoList: FunctionComponent<any> = ({moduleName}) => {
    const [todoEntries, setTodoEntries] : any = useState([]);
    const [newEntry, setNewEntry] = useState("");

    useEffect(() => {
        if (localStorage.getItem(moduleName)) {
            const localStorageValue = localStorage.getItem(moduleName);
            if (localStorageValue) {
                localStorageValue.split(',').map((entry, index) => {
                    if (entry.includes('checked')) {
                        const newItem = {
                            text: entry,
                            checked: true
                        }
                        setTodoEntries([...todoEntries, newItem]);
                    } else {
                        const newItem = {
                            text: entry,
                            checked: false
                        }
                        setTodoEntries([...todoEntries, newItem]);
                    }
                });
            }
        }
    }, []);

    const handleAdd = () => {

        let newAdd = {
            text: newEntry,
            checked: false
        }

        setTodoEntries([...todoEntries, newAdd]);

        localStorage.setItem(moduleName, newEntry);
    }

    const handleChecked = (updatedEntry: object) => {

        // @ts-ignore
        const modified = {
            // @ts-ignore
            text: updatedEntry.text,
            // @ts-ignore
            checked: !updatedEntry.checked
        }

        let entries = todoEntries.slice();
        // @ts-ignore
        let filtered = entries.filter((entry: object) => entry.text !== updatedEntry.text);
        filtered.push(modified);
        setTodoEntries(filtered);

        const localStorageValue = localStorage.getItem(moduleName);
        if (localStorageValue) {
            // @ts-ignore
            let filteredLs = localStorageValue.split(',').filter(entry => entry.text !== updatedEntry.text);
            // @ts-ignore
            filteredLs.push(updatedEntry.text + "-checked");

            localStorage.removeItem(moduleName);
            filteredLs.forEach(entry => localStorage.setItem(moduleName, entry));
        }
    }

    return (
            <>
                <TodoListEntry entries={todoEntries} handleChecked={handleChecked} />
                <TodoListInput entriesCallback={setNewEntry} handleAdd={handleAdd} />
            </>
            );
}

export default TodoList;