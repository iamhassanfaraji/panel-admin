import Cookie from "js-cookie";

import { showError} from "../../../component/error"

function submit(e){
    const inputFile = e.target.querySelector('input[type="file"]')
    const progress = e.target.querySelector('.progress span')
    e.preventDefault()
    const url =process.env.REACT_APP_URL+'/upload'

    const upload = new XMLHttpRequest()
    const form = new FormData()

    const files = Object.values(inputFile.files)
    for(let i = 0; i<files.length ;i++){
        form.append(i,files[i],files[i].name)
        progress.innerHTML +=`${files[i].name}<br/>`;
    }

    upload.open("POST", url)

    upload.setRequestHeader("token",`${Cookie.get('token')}`)

    upload.responseType = 'text'
    const showProgress = document.createElement('p')

    upload.upload.onloadstart = () => {
        showProgress.classList.add('showProgress')
        progress.append(showProgress)
    }
    
    upload.upload.onprogress = function (e){
        const result= Math.floor((e.loaded * 100) / e.total)
        showProgress.innerText = `${result}٪`
    }
    upload.upload.onload = (e)=>{ 
        progress.innerHTML +=`${ 'فایل آپلود شد'} <br/>`
    }

    upload.upload.onerror=(e)=>{
        progress.innerHTML = 'ارور رخ داد مجدد امتحان کنید'
    }

    upload.onload = ()=>{
        if(upload.status != 200){
            progress.innerHTML +=`${ 'اما خطایی در ذخیره سازی اطاعات رخ داده است'} <br/>`
        }        
    }

    e.customUpload = upload
    upload.send(form)
}
function reset(e){
    const progress = e.target.querySelector('.progress')
    e.customUpload.abort()
}


export{submit, reset}
