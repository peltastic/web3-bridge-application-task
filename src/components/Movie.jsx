import classes from "../styles/movie.module.css";
import { AiTwotoneLike } from "react-icons/ai";
function Movie({ likes, name, id, clicked, price, index, liked }) {
  const LikesHandler = () => {
    if (liked) {
      clicked(index, "dislike");
    } else {
      clicked(index, "like");
    }
  };
  return (
    <div className={classes.Movie}>
      <h1>{name}</h1>
      <div className="" onClick={LikesHandler}>
        <h1 style={{ fontSize: "20px", marginRight: "10px" }}>${price}</h1>
        <AiTwotoneLike
          style={{ color: `${liked ? "#d89606" : "black"}`, cursor: "pointer" }}
        />
        {likes ? <p>{likes}</p> : null}
      </div>
    </div>
  );
}

export default Movie;
