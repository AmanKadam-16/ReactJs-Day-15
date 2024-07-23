import { Link, useNavigate } from "react-router-dom";

const About = () =>{

    const navigate = useNavigate();
    function clickHome(){
        navigate('/')
    }

    return(

        <>
{/* <h2 onClick={clickHome}>Home</h2> */}
<Link to='/'>Home</Link>
        <h1>This is About section</h1>
        </>
    )
}

export default About;