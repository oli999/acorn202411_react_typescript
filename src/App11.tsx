// src/App11.tsx

import React, { useReducer, useRef } from 'react';
import {v4 as uuid} from "uuid";

// 액션을 발행할때 해당 액션의 type 정의하기 
interface Action{
    type:ActionType
    payload?:string  // RESET 할때는 payload 가 없으므로 optional 로 정의한다 
}


// 액션객체에서 사용할 type 목록을 미리 enum 으로 정의해 놓기 
enum ActionType{
    ADD, RESET, REMOVE
}

const reducer = (state: State, action:Action):State =>{
    let newState:State;
    if(action.type === ActionType.ADD){
        newState={
            ...state,
            friends:[...state.friends, {id:uuid(), name:action.payload || ""}]
        }
    }else if(action.type === ActionType.RESET){
        newState={
            ...state,
            friends:[]
        }
    }else if(action.type === ActionType.REMOVE){
        newState={
            ...state,
            friends:state.friends.filter(item => item.id !== action.payload)
        }
    }else{
        newState=state;
    }
    return newState;
}

interface Friend{
    id: string;
    name: string;
}

interface State{
    userName: string,
    friends: Friend[]
}

//초기 상태값
const initState: State = {
    userName:"kimgura",
    friends:[]
}

function Friends() {
    // useReducer(리듀서 함수, 초기상태값)
    const [state, dispatch] = useReducer(reducer, initState);

    //특정 요소의 참조값을 관리하기 위한 hook
    const inputName = useRef<HTMLInputElement>(null);

    return (
        <div>
            <p> 로그인된 userName : <strong>{state.userName}</strong></p>
            <input ref={inputName} type="text" placeholder='친구 이름 입력...'/>
            <button onClick={()=>{
                //입력한 이름을 추가하는 action 을 dispatch 한다 (동작을 발행한다)
                // inputName.current 라는 방에는 참조값(input 요소) 이 들어 있다
                const name = inputName.current!.value;
                //발행할 action 을 object 로 만든다.
                const action:Action = {type:ActionType.ADD, payload:name };
                //action 발행하기
                dispatch(action);
            }}>추가</button>
            <button onClick={()=>{
                // Action 객체의 payload 는 optional 이기 때문에 payload 를 담지 않아도 된다 
                const action:Action = {type:ActionType.RESET};
                dispatch(action);
            }}>Reset</button>
            <ul>
                {state.friends.map(item => 
                    <li key={item.id}>
                       {item.name}
                       <button onClick={()=>{
                            const action:Action = {type:ActionType.REMOVE, payload: item.id};
                            dispatch(action); 
                       }}>x</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Friends;