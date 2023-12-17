
import { banjoDiary } from "../data/banjo-diary";
import { useParams } from 'react-router-dom';

const DiaryPages = () => {
    const { id } = useParams();
    const filteredData = banjoDiary
    .filter((pages)=> pages.id === id)
        .map((pages)=>(
          <p key={pages.id} className="text-justify">
          {/* then loop through the text content array */}
          <p className="font-bold text-lg text-center">{pages.bookName}</p>
          <h1 className="font-bold text-lg text-center">{pages.title}<span><p className="italic font-semibold mb-4">page {pages.id}</p></span></h1>
          
            {pages.content.map((text)=>(
              <p key={text} className="mb-3">{text}</p>
            ))}
          </p>
        ))
    return (
       <section>
        <div className="px-10 ">
        <h1>Diary Page {id}</h1>
      {/* loop through the banjo diary pages */}
        <div>{filteredData}</div>
      </div>
    </section> 
    );
}
 
export default DiaryPages;