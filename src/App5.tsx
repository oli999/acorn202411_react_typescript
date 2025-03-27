// src/App5.tsx

import { useState } from "react";
import { MemberDto, PostDto } from "./types/type";


function App5() {
    //모든 data type 이 기본적으로 null 이나 undefined 를 허용하지는 않는다.

    // num 은 number type 과 undefined type 의 합집합(union) type
    let num:number|undefined = undefined; 
    num=10;
    // name 은 string type 과 null 의 합집합 type 
    let name:string|null = null;
    
    // userName 에 null 을 허용하고 싶으면  useState 의 generic 에 명시 하면 된다. 
    const [userName, setUserName] = useState<string|null>(null);

    // 미리 정의한 type 을 이용해서 union type 을 만들수도 있다. 
    type Etc = MemberDto | PostDto;
    /*
        ? 는 null safe 연산자 

        userName?.length 의 의미는 userName 이 null 이 아닐때만 .length 를 참조해라 라는 의미
        userName!.length 의 의미는 userName 이 null 일 가능성이 없으니 그냥 .length 를  참조해라 라는 의미

        const result = userName?.length 에서  
        1. userName 이 null 이 아니면  .length 가 참조되어서 result 에 문자열의 길이가 대입된다.
        2. userName 이 null 이면 .length 가 참조 되지 않고 result 에는 null 이 대입된다.
        따라서 result 라는 변수도 null 일 가능성이 있다는 의미이다.
    */
    const r = userName?.length;
    
    return (
        <div>
            
        </div>
    );
}

export default App5;