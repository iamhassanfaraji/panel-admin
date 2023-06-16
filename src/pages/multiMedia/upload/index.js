import { useEffect } from "react";
import {submit,reset} from "./script";

import './style.scss'
function listSelectedFile(e){
     const progress = window.document.querySelector('.upload .progress span')
     const files = e.target.files
     for(let i=0; i < files.length; i++){
        progress.innerHTML +=`${files[i].name}<br/>`;
     } 
     progress.innerHTML +=`آماده آپلود <br/>`;
}

const Upload = ()=>{

    return(
        <div className={'upload'}>
            <div className={"form-container"}>
                <form action="#" onSubmit={submit} onReset={reset} >
                    <label htmlFor={'file'} className={'fakeInputFile'} name={'avatar'}>انتخاب فایل</label>
                    <input onChange={listSelectedFile} id={'file'} type={'file'} multiple={'multiple'} name={'avatar'}/>
                    <span className="progress">
                       <span>
                           <p className={'showProgress'}></p>
                       </span>
                </span>
                <span>
                    <button type="submit">آپلود فایل</button>
                    <button type="reset">انصراف</button>
                </span>
                </form>
            </div>
        </div>
    )
}

export default Upload