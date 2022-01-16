//routing
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const Details = () => {
    const { id } = useParams(); //allows you to use params from URL 
    return <h2> {id} </h2>; //to test that we can use the id param from URL
}
export default Details;