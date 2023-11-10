import styles from './HomeComponent.module.css'; 
import Loading from './LoadingComponent'
import useCustomizedFetch from '../CustomHooks/useCustomizedFetch'
import Error from './Error'
import UpcomingEvent from "./UpcomingEvent"
import { FaSpaceShuttle } from "react-icons/fa";
import { useEventStore } from '../store/EventStore'
import BlogCard from './BlogCard'
import { useState, useEffect } from  'react'
import { useSearchParams } from 'react-router-dom';


export default function HomeComponent(){
    let events= useEventStore((state)=>state.events)
    // article fetching:
    const URL='https://api.spaceflightnewsapi.net/v3/articles?_limit=200'
    const { isLoading, error, data } = useCustomizedFetch(URL);
    let checkError = !data ? error :false
    const [searchParams, setSearchParams] = useSearchParams();
    const itemsPerPage=8;

    const totalItems=(data === undefined ) ? 0 : data.length
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
    const sortByDate=(a,b)=>{
        if (a.net < b.net ){ return -1;}
        if (a.net  > b.net ){ return 1;}
        return 0;
    }

    return (
        <div>
            { isLoading && <Loading/>}
            {checkError && <Error message={error.message}/>} 
            {data &&
            <div className={styles.parent}>
                <div  className={styles.space}>
                <h2 className={styles['heading']}>Top News:</h2>
                    <div className={styles['space-objects']}> 
                        {data && data.slice(start,end).map((e) =><BlogCard key={e.id} article={e}/>)}
                    </div>
                    <div className={styles['pagination']}>
                        <button className={styles['event-button']} disabled={(currentPage ===1)} onClick={Prev} > {`<< PREV`} </button> 
                        <button className={styles['event-button']} disabled={(currentPage === totalPages)} onClick={Next} > {`MORE NEWS >>`} </button> 
                    </div>
                </div> 
                <div className={styles['upcoming-launches']}> 
                    <h2 className={styles['title']}><FaSpaceShuttle  style={{"color":"#ff7f50","transform": 'rotate(-90deg)'}}/> LAUNCHING SOON  <FaSpaceShuttle  style={{"color":"#ff7f50","transform": 'rotate(-90deg)'}}/></h2> 
                    { events && events.slice(0,6).sort(sortByDate).map((e) =><UpcomingEvent key={e.id} event={e}/>)}
                    {/* {JSON.stringify(events, null, 2) } */}
                </div>
            </div>
            }
        </div>
    )
}