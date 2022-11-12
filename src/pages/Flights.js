import styles from './Flight.module.css'
import { useEventStore } from '../store/EventStore'
import ParentCard from '../Components/ParentCardComponenet';
import { useState, useEffect } from  'react'
import { useSearchParams } from 'react-router-dom';

export default function Flights(){
    const [searchParams, setSearchParams] = useSearchParams();
    let events= useEventStore((state)=>state.events)
    const itemsPerPage=6;
    const totalItems=(events === undefined || events.length===0) ? 0 : events._items.length
    // console.log(`total items :${totalItems}`)

    const totalPages=Math.ceil(totalItems/itemsPerPage)

    // console.log(`total pages :${totalPages}`)
    
    let pageno=isNaN(parseInt(searchParams.get("page")) ) ? 1 : parseInt(searchParams.get("page")) > totalPages ? 1 : parseInt(searchParams.get("page")) 

    // console.log(`pageno :${pageno}`)


    const [currentPage, setCurrentPage] =useState(()=>pageno);
   useEffect( ()=> {setCurrentPage(pageno)}, [pageno])
    // console.log(`current page:${currentPage}`)
    let start=currentPage*itemsPerPage - itemsPerPage
    // console.log(`start :${start}`)
    let end= start + itemsPerPage
    // console.log(`end :${end}`)

  
   
    window.onpopstate = function () {
        window.location.reload()
        // console.log(window.location)
    };

    const Prev=()=>{
        if (currentPage > 1 ){
            setSearchParams({ page: currentPage-1 });
            setCurrentPage((prev)=> prev - 1)
    } 
    }

    const Next=()=>{
        if (currentPage < totalPages){
            setSearchParams({ page: currentPage+1 });
            setCurrentPage( (prev)=>prev+1)
            
        }
    } 
   
    return (
            <div  className={styles['parent']} > 
                    <div className={styles['banner']}><p>Upcoming Launch Events:</p></div>
                    {(events === undefined || events.length===0) ? <h4 style={{"color":"#ffdddd"}}> EVENTS LOADING ....</h4> :  <ParentCard start={start} end ={end} events={events}/>} 
                <div className={styles['pagination']}>
                    <button className={styles['event-button']} disabled={(currentPage ===1)} onClick={Prev} > {`<< PREV`} </button> 
                    <button className={styles['event-button']} disabled={(currentPage === totalPages)} onClick={Next} > {`MORE EVENTS >>`} </button> 
                </div>
            </div>
    )
}