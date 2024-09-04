'use client'

import { Editor } from "amis-editor";

const amisJSON = {
    type: "page",
    body: "测试",
    title: "标题",
}

const onChange = (value: any) => {
    console.log("onChange", value);
}

const Amis = () => {
    return (
        <Editor value={amisJSON} onChange={onChange}/>
    )
}

export default Amis;