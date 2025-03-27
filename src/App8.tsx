import { FC } from "react";




function App8() {
    //FortuneComponent 에서 사용하는 props 의 type 을 미리 정의 
    interface FortuneProps{
        fortune:string
    }

    //함수형 컴포넌트 정의하기
    const FortuneComponent:FC<FortuneProps> = (props)=>{
        return (
            <p> 오늘의 운세 : {props.fortune}</p>
        );
    }

    return (
        <div>
            <h1>함수형 component 를 불러서 사용하기</h1>
            <FortuneComponent fortune="동쪽으로 가면 귀인을 만나요" />
        </div>
    );
}



export default App8;