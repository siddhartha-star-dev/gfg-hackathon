
import { Link } from "react-router-dom";
const Home=()=>{
    return (
        <>
        <Link to='/previousinfo'>
            <button className="mt-20">
                Previous Information
            </button>
        </Link>
        <Link to='/doctorform'>
            <button className="mt-20">
               Doctor Form
            </button>
        </Link>

        </>
        

    );

}
export default Home