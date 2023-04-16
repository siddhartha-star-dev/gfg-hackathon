import { useLocation } from "react-router-dom";

const Report  = ()=>{
    const location = useLocation();
    const {d} = location.state;

    return(
        <>
        hi
        <div>{d.category}</div>
        </>
    )
}

export default Report;