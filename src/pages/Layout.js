import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import {Outlet} from "react-router-dom";
import { useEventStore } from '../store/EventStore'
import useCustomizedFetch from '../CustomHooks/useCustomizedFetch'


export default function Layout(){
  
        // events fetching:
        const populateEvents= useEventStore((state)=>state.populateEvents)
        const eventUrl = 'https://57n9az.deta.dev/'
        const events=useCustomizedFetch(eventUrl)
        populateEvents(events.data)

        

    return (
            <div>  
                <Banner />
                <Outlet />
                <Footer />
            </div>
    )
}