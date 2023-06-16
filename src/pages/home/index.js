import { useEffect } from "react"
import { errorBoundaries, errorHandler } from "../../component/error"

const Home = errorBoundaries( ()=>{

    useEffect(()=>{

        errorHandler( ()=>{
            home.addEventListener("click", ()=>{
                errorHandler(()=>{
                    console.log(ajkshdkasd)
                })
            })
        })

    },[])

    return(
        <>
            <div id="home">home</div>
        </>
    )
})

export default Home