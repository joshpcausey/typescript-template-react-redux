import { Action } from "redux";
import { Thunk } from '../index'

export interface IState {
    name: string;
    todos: string[]
}

const SET_NAME = 'SET_NAME';
const ADD_TODO = 'ADD_TODO';

interface ISetName extends Action {
    type: typeof SET_NAME;
    value: string;
}

interface IAddTodo extends Action {
    type: typeof ADD_TODO;
    value: string;
}

export function todoReducer(
    state: Readonly<IState> = {
        name: '',
        todos: []
    },
    action: ISetName | IAddTodo
): IState {
    switch(action.type){
        case SET_NAME:
            return {
                ...state,
                name: action.value
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.value]
            }
        default:
            return state
    }
}

export const setName = (value: string): ISetName => ({
    type: SET_NAME,
    value
});

export const addTodo = (value: string): IAddTodo => ({
    type: ADD_TODO,
    value
});

export const addTodoThunk = (): Thunk => (
    (dispatch, getState: () => IState) => {
        dispatch(addTodo(getState().name))
    }
)