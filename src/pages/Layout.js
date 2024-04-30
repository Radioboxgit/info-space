import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import {Outlet} from "react-router-dom";
import { useEventStore } from '../store/EventStore'
import useCustomizedFetch from '../CustomHooks/useCustomizedFetch'


export default function Layout(){
  
        // events fetching:
        const populateEvents= useEventStore((state)=>state.populateEvents)
        const eventUrl = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=50'
        const events=useCustomizedFetch(eventUrl)
       
        if (!events.isLoading) {
            const results =events.data.results.map(result => ({
                id: result?.id,
                name: result?.name,
                net: result?.net,
                status: result?.status,
                url: result?.image,
                launch_service_provider: result?.launch_service_provider?.name,
                rocket: result?.rocket?.configuration?.name,
                mission: result?.mission?.name,
                mission_description: result?.mission?.description,
                mission_orbit_name: result?.mission?.orbit?.name,
                mission_orbit_abbrev: result?.mission?.orbit?.abbrev,
                agency_description: result?.mission?.agencies[0]?.description,
                agency_wiki_url: result?.mission?.agencies[0]?.wiki_url,
                pad_name: result?.pad?.name,
                pad_map_url: result?.pad?.map_url,
                pad_latitude: result?.pad?.latitude,
                pad_longitude: result?.pad?.longitude,
                pad_location_name: result?.pad?.location?.name,
                pad_country_code: result?.pad?.country_code,
              }));
              // console.log(results)
              //save the data
            populateEvents(results)
          }
        

    return (
            <div>  
                <Banner />
                <Outlet />
                <Footer />
            </div>
    )
}