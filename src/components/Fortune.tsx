// src/components/Fortune.tsx 

import { FC } from "react";

export interface FortuneProps{
    fortune:string
}

const Fortune:FC<FortuneProps> = (props)=>{
    return (
        <p> 오늘의 운세 : <strong>{props.fortune}</strong></p>
    );
}

export default Fortune;