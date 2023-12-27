import { AboutPstBanjo } from "../data/about-pst";
import ViewMore from "../components/view-more-btn";
const AboutBanjo = () => {
  const cardStyle =
    "p-2 text-white bg-blue-500 rounded-lg shadow-lg w-[90%] mx-auto md:mx-0 md:w-auto";
  return (
    <>
      <div className="container flex flex-col items-center justify-around my-4 ite md:m-4 md:flex-row font-tertiary">
        <div className="w-[35%] h-full p-1 border-4 rounded-md border-blue-500 mx-auto md:mx-0 ">
          <img
            src={AboutPstBanjo.img}
            alt="Pastor Banjo"
            className="rounded-lg"
          />
        </div>
        <div className="max-w-md space-y-2">
          <h1 className="text-lg font-bold text-center text-blue-500 md:text-3xl md:mb-2">
            Who is {AboutPstBanjo.pstName}?
          </h1>
          <div className={cardStyle}>
            <p>
              {AboutPstBanjo.pstName} {AboutPstBanjo.pstTitle}
            </p>
          </div>

          {AboutPstBanjo.brief.map((text, i) => (
            <div key={i} className={cardStyle}>
              <p>{text}</p>
            </div>
          ))}

          <div className={cardStyle}>
            <p>
              {AboutPstBanjo.education}
            </p>
          </div>
          <div className={cardStyle}>
            <p>
              {AboutPstBanjo.family}
            </p>
          </div>
          <div className="flex justify-between">
      <ViewMore link="/book-list" text="Library" style="mx-4"/>
      <ViewMore link="https://whatsapp" text="Chat with Pst Banjo" style="mx-4"/>
      </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutBanjo;
