import { useState } from "react";
import Fortune from "./components/Fortune";
import Friends from "./components/Friends";


function App9() {

    const [friends, setFriends] = useState<string[]>(["김구라","해골","원숭이"]);

    //Friends 컴포넌트에 전달한 함수 
    const handleDelete = (idx:number)=>{
        setFriends(friends.filter((item, index) => index !== idx));
    }

    return (
        <div>
            <h1>외부 component 사용하기</h1>
            <Fortune fortune="동쪽으로 가면 귀인을 만나요"/>
            <Fortune fortune="남쪽으로 가면 예비군을 만나요"/>
            <Friends list={friends} onDelete={handleDelete}/>
        </div>
    );
}

export default App9;