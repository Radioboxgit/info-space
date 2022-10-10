import { useQuery } from "react-query";
import axios from "axios";

async function queryFunction(URL){
    const {data} = await axios.get(URL)  
    return data
}


export default function useCustomizedFetch(link_url) {
  const { isLoading, error, data } = useQuery(["repoData",link_url], ()=>queryFunction(link_url));
  return {isLoading, error, data}
  
}

