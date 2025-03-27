// src/App10.tsx

import { JSX } from "react";

function App10() {
    // jsx 객체는 JSX.Element type 이다
    const a:JSX.Element = <li>하나</li>;
    const b:JSX.Element = <button>눌러보셈</button>;

    // JSX.Element 배열 type 
    const list:JSX.Element[] = [
        <li>김구라</li>,
        <li>해골</li>,
        <li>원숭이</li>
    ];

    const list2:Array<JSX.Element> = [
        <li>김구라</li>,
        <li>해골</li>,
        <li>원숭이</li>
    ];

    return (
        <div>
            <ul>
                {a}
            </ul>
            {b}
            <h2>친구 목록</h2>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default App10;
