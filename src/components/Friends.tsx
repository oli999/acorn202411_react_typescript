// src/components/Frends.tsx

import { FC } from "react";
import { v4 as uuid } from "uuid";

export interface FriendsProps{
    list:string[]
    onDelete:(idx:number)=>void
}

const Friends:FC<FriendsProps> = ({list, onDelete})=>{
   
    return(
        <>
            <h2>친구 목록 입니다</h2>
            <ul>
                {list.map((item, index) => 
                    <li key={uuid()}>
                        {item}
                        <button onClick={()=>{
                            onDelete(index)
                        }}>x</button>
                    </li>
                )}
            </ul>
        </>
    );
};

export default Friends;