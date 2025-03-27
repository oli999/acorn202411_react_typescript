// src/types/type.ts

//회원정보 type 
export type MemberDto = {
    num:number;
    name:string;
    addr:string;
}

//글정보 type 
export type PostDto = {
    id:number;
    title:string;
    content:string;
}