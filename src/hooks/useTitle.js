import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title=`${title} - E-Guru`;
    },[title])
};

export default useTitle;