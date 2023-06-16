import { useEffect, useState} from "react";

import './showPhoto.scss'


function leftHandler(select,setSelect){
    const result = select - 1
    if(result >= 0 ){
        setSelect(result)
    }
}
function rightHandler(select,setSelect,max){
    const result = select + 1
    if(result < max ) {
        setSelect(result)
    }
}



const Slider = ({images, type})=>{
    const [select,setSelect]=useState(0)
    
    if(type){
        let dot= images.map((value,key)=>{
            if(key===select){
                return <span className={'active'}></span>
            }else{
                return <span></span>
            }
        })
        return(
            <div id={'showPhoto'}  >
                <img src={images[select]}  />
                <div className={'nav'}>
                        <span className={'left'}  onClick={()=>leftHandler(select, setSelect,images.length)}>left</span>
                        <span className={'right'}  onClick={()=>rightHandler(select, setSelect,images.length)}>right</span>
                        <div className={'bottom-nav'}>
                            {dot}
                        </div>
                </div>
            </div>
        )
    }else{
        return(
            <div id={'showPhoto'}>
                <img src={images}/>
            </div>
        )
    }
}

function EditPhoto({value, type, idOfDataMainState, saveOnMainState, dataId, disabled=false}){
    const [input, setInput]=useState(value)

    useEffect(()=>{
        if(!disabled){
            saveOnMainState({id: idOfDataMainState, value:input, key: dataId})
        }
    },[input])

    return(
        <div id="editPhoto">
            {
                type == "array" ? <Slider/> :  <img src={input} /> 
            }
        </div> 
    )
} 


function ShowPhoto({value}){
    const type = Array.isArray(value)
    
     return(
         <div id={'showPhoto'}> 
                {
                type ? (<>
                        <img src={value[0]}  />
                        <div className={'preview'}>
                        شامل
                        <span> {value.length - 1  } </span>
                        مورد دیگر
                        </div>
                    </>) : <img src={value}  />
                }
         </div>
     )
}

export {ShowPhoto, EditPhoto }
