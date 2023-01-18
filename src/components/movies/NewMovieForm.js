import classes from "./NewMovieForm.module.css";
import {useRef} from "react";
import {MOVIE_DATA} from '../../pages/Home';


function NewMovieForm(){
const titleInputRef=useRef();
const imageInputRef =useRef();
const descriptionInputRef =useRef();
const imdbInputRef =useRef();
    
function submitHandler(event){
        event.preventDefault();
    const enteredTitle=titleInputRef.current.value;
    const enteredImage=imageInputRef.current.value;
    const enteredDescription=descriptionInputRef.current.value;
    const enteredImdb=imdbInputRef.current.value;

const movieData = {
id:'movie'+(MOVIE_DATA.length+1),
    title:enteredTitle,
    image:enteredImage,
    desc:enteredDescription,
    imdb:enteredImdb
};
MOVIE_DATA[MOVIE_DATA.length]=movieData;
alert('Movie added sucessfully');
titleInputRef.current.value="";
imageInputRef.current.value="";
descriptionInputRef.current.value="";
imdbInputRef.current.value="";
console.log(movieData);
}
    return (
    <div className={classes.item}>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title"> Movie Title</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image"> Movie Image</label>
                <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="description"> Movie Description </label>
                <textarea id="description" required rows='5' ref={descriptionInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="imbd"> IMDB</label>
                <input type="text" required id="imbd"  ref={imdbInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add Movie</button>
            </div>
        </form >
    </div>
    );
}

export default NewMovieForm;