import LaunchCard from '../Components/EventCard'

export default function ParentCard(props){
    const { events,start,end } = props

    const sortByDate=(a,b)=>{
        if (a.takeOff < b.takeOff ){ return -1;}
        if (a.takeOff  > b.takeOff ){ return 1;}
        return 0;
    }

    return (
        <>
             { events.length !== 0  &&  events._items.slice(start,end).sort(sortByDate).map((e) =><LaunchCard key={e.key} event={e}/>) }

        </>
           
    )
}