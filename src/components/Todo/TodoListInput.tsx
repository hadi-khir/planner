import {Button, Stack, TextField} from "@mui/material";

const TodoListInput: React.FunctionComponent<any> = ({entriesCallback, handleAdd}) => {

    return (
            <Stack style={{"paddingTop": "5%"}}
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={2}>
                <TextField multiline fullWidth variant="standard" onChange={(e) => entriesCallback(e.target.value)}/>
                <Button variant="outlined" onClick={() => handleAdd()}>+</Button >
            </Stack>
            )
}

export default TodoListInput;