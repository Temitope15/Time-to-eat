
import { banjoDiary } from "../data/banjo-diary";
import { useParams } from 'react-router-dom';

const DiaryPages = () => {
    const { id } = useParams();
    return ( <>
        <div className="px-10 ">
        <h1>Diary Page {id}</h1>
      {/* loop through the banjo diary pages */}
        {banjoDiary.map((pages)=>(
          <p key={pages.page} className="text-justify">
          {/* then loop through the text content array */}
          <p className="font-bold text-lg text-center">{pages.bookName}</p>
          <h1 className="font-bold text-lg text-center">{pages.title}<span><p className="italic font-semibold mb-4">page {pages.page}</p></span></h1>
          
            {pages.content.map((text)=>(
              <p key={text} className="mb-3">{text}</p>
            ))}
          </p>
        ))}
      </div>
    </> );
}
 
export default DiaryPages;