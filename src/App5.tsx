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

    const r = userName?.length;
    
    return (
        <div>
            
        </div>
    );
}

export default App5;