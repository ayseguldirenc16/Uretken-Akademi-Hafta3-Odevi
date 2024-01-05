
import { useState } from 'react';
import {  IMAGES } from '../data/indeks'
import Card from 'react-bootstrap/Card';





function FilmPage() {
    const [ MovieName, setMovieName]= useState("");

    const [movie , setMovie]= useState(IMAGES);

    function handleFilmName(x){
        const MovieName = x.target.value;
        setMovieName(MovieName);
    

    const FiltreMovies = IMAGES.filter((film)=>
    film.title.includes(MovieName.toLowerCase()));
    setMovieName(MovieName)
    }

  return (
    <>
   <div className="container">
    <button value='ara' onClick={{}} style={{width:'80%',borderRadius:'9px',marginTop:'15px',height:'50px'}}>Ara
    
    </button>
    <div className="row" style={{width:'90%',margin:'10px',padding:'10px'}}>
        {
            movie.map((item,index)=>
            <Card  className="col-md-3" key={index} style={{padding:'25px',margin:'20px',}} >
                <Card.Img src={item.image}/>



                <Card.Body>
                    <hr />
                    <Card.Title>{item.title}</Card.Title>
                    <hr />
                    <Card.Text>
                        {item.konu}
                        <ul>
                            <li>Yayınlanma Tarihi: {item.year}</li>
                            <li>Türü: {item.type}</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
            
            
            
            )

        }
    </div>
    

   </div>
    
    
    </>
  )
}

export default FilmPage
