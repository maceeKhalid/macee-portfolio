import './count.css'
import { useState } from 'react'
const Count=()=>{
    const [count,setcount]=useState(0)
    const handleForward=()=>{
        const setTime=()=>{
            setcount((current)=>{
                return(
                    current+1
                )
            })
        }
        setTimeout(setTime,3000)
    }
    return(
        <>
        <h2 className='formatH' >Count Reader</h2>
        <p className='formatP'>At each Button clicked,wait for <span className='number yes'>3000</span> seconds for result to display</p>
        <h1 className='countFormat'>{count}</h1>
        <button type='button' onClick={handleForward} className='btnFormat'>Forward</button>
        </>
    )
}
export default Count