import Nav from "./Nav"
import classes from "../styles/home.module.css"
import {useNavigate} from "react-router-dom"

function Home() {
    const navigate = useNavigate()
  return (
    <div className={classes.Home}>
        <Nav />
        <div className={classes.Welcome}>
            <h1 className={classes.Header}>Catch the Biggest Movies Here</h1>
            <button onClick={()=> navigate("/movies")} className={classes.Button}>Watch</button>
        </div>
    </div>
  )
}

export default Home