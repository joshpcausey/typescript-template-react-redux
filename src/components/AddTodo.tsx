import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodoThunk, IState, setName } from '../store/store';

export interface IAddTodoProps {
    name: string;
    todos: string[];
    setName: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    addTodoThunk: () => void;
}

const AddTodo: React.SFC<IAddTodoProps> = ({ name, setName, addTodoThunk }: IAddTodoProps) => {

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={setName} 
            />
            <button
                onClick={addTodoThunk}
                disabled={name.length < 1}
            >
                Add Todo
            </button>
        </div>
    );
}

const mapStateToProps = ({ name, todos }: IState) => ({ name, todos });

// const mapStateToProps = (state: IState) => ({
//     name: state.name,
//     todos: state.todos
// });

// tslint:disable-next-line
const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodoThunk: () => dispatch<any>(addTodoThunk()),
    setName: (e: React.SyntheticEvent<HTMLInputElement>) => dispatch(setName(e.currentTarget.value))
});

export const AddTodoComponent = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

// export const AddTodoComponent = connect(
//     mapStateToProps, 
//     (dispatch: (action: Action | Thunk) => void) => ({
//         addTodoThunk: () => dispatch(addTodoThunk()),
//         setName: (e: React.SyntheticEvent<HTMLInputElement>) => dispatch(setName(e.currentTarget.value))
//     }) as any
// )(AddTodo);
