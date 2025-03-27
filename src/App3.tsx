// src/App3.tsx 

//미리 정의된 type.ts 에서 MemberDto 를 import 해서 사용하기 
import { MemberDto, PostDto } from "./types/type";


function App3() {
    /*
        외부에 미리 정의된 type 을 import 해서 사용해 보기 
    */

    const members: MemberDto[] = [];
    members.push({num:1, name:"김구라", addr:"노량진"});
    members.push({num:2, name:"원숭이", addr:"상도동"});

    // PostDto[] 배열을 만들고 아이템을 추가해 보세요.
    const posts: PostDto[] = [];
    posts.push({id:1, title:"제목1", content:"내용1"});
    posts.push({id:2, title:"제목2", content:"내용2"});

    // json 문자열 
    const json1 = `
        {"num":1, "name":"kim", "addr":"노량진"}
    `;
    //json 을 파싱한 결과를 MemberDto type 으로 받기
    let m1 = JSON.parse(json1) as MemberDto;
    
    const json2 = `
        ["kim", "lee", "park"]
    `;
    //위의 json 문자열을 파싱해서 적절한 type 변수에 담아 보세요.
    let names = JSON.parse(json2) as string[];
    names = ["xxx", "yyy"];
    //names = [ 10, 20]; //에러

    const json3=`
        [
            {"num":1, "name":"kim", "addr":"노량진"},
            {"num":2, "name":"해골", "addr":"행신동"}
        ]
    `;
    //위의 json 문자열을 파싱해서 적절한 type 변수에 담아 보세요.
    let members2 = JSON.parse(json3) as MemberDto[];
    // string[] 은 Array<string> 과 같다
    // MemberDto[] 은 Array<MemberDto>  와 같다 
    let members3:Array<MemberDto> = members2;

    return (
        <div>
            
        </div>
    );
}

export default App3;