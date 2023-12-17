import React from 'react'
import { useParams } from 'react-router-dom'
import { books } from "../data/library";
function BookDescription() {
    const {bookId} = useParams()
  
    console.log(bookId)
return (
    <section>
    {
    
        books.map(e=>(
            <div key={e.id}>
                <p>{e.description}</p>
            </div>
        ))
        }
    
    </section>
)
}

export default BookDescription