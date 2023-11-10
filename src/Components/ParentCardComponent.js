import LaunchCard from './EventCard'

export default function ParentCard(props){
    const { events,start,end } = props

    const sortByDate=(a,b)=>{
        if (a.net < b.net ){ return -1;}
        if (a.net  > b.net ){ return 1;}
        return 0;
    }

    return (
        <>
             { events.length !== 0  &&  events.slice(start,end).sort(sortByDate).map((e) =><LaunchCard key={e.id} event={e}/>) }

        </>
           
    )
}