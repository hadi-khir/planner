import {useEffect, useState} from "react";

const Notes = () => {
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const lsNotes = localStorage.getItem('notes');

        // @ts-ignore
        setNotes(lsNotes);
    }, [])
    const handleUpdate = (event: object) => {

        // @ts-ignore
        const input = event.target.value;
        setNotes(input);
        localStorage.setItem('notes', input);
    }

    return (
            <textarea
                value={notes}
                className="textarea notes-textarea"
                onChange={e => handleUpdate(e)}/>
            );
}

export default Notes;