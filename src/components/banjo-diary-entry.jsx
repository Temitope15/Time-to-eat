import { banjoDiary } from "../data/banjo-diary";
const BanjoAyekaDiaryPages
 = () => {
    return ( <>
        <div className="px-10 ">
        {banjoDiary.map((pages)=>(
          <p key={pages.page} className="text-justify">
            {pages.content.map((text)=>(
              <p key={text} className="mb-3">{text}</p>
            ))}
          </p>
        ))}
      </div>
    </> );
}
 
export default BanjoAyekaDiaryPages
;