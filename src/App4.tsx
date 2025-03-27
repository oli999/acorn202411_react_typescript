// src/App4.tsx

import { ChangeEvent, useRef, useState } from "react";

function App4() {
    // 열거형 type 
    enum Weapon{
        SWORD="sword",
        GUN="gun",
        ARROW="arrow",
    }

    const [weaponState, setWeaponState] = useState("gun");
    /*
        select 요소에 change 이벤트가 발생했을때 발생하는 이벤트 객체의 type 은 
        ChangeEvent<HTMLSelectElement> 이다 
    */
    const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setWeaponState(e.target.value);
    }

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        if(weaponState === Weapon.SWORD){
            /*
                pRef.current 는 null 일 가능성이 있기때문에 확인을 해서 .innerText 를 참조해야한다.
            */
           if(pRef.current !== null){
                pRef.current.innerText = "칼로 공격해요!";
           } 
        }else if(weaponState === Weapon.GUN){
            // ! 는 null 일 가능성이 전혀 없다는 단언, 즉 그냥 강제로 참조해! 라는 의미 
            pRef.current!.innerText = "총으로 공격해요!";
        }else if(weaponState === Weapon.ARROW){
            pRef.current!.innerText = "활로 공격해요!";
        }
    }
    // p 요소의 참조값을 useRef() 를 이용해서 관리 하고 싶으면 generic 를 HTMLParagraphElement 로 선언
    const pRef = useRef<HTMLParagraphElement>(null);


    return (
        <div>
            <select onChange={handleChange} value={weaponState}>
                <option value="sword">칼</option>
                <option value="gun">총</option>
                <option value="arrow">활</option>
            </select>
            <button onClick={handleClick}>공격하기</button>
            <p ref={pRef}></p>
        </div>
    );
}

export default App4;