/* eslint-disable react/prop-types */
import { AboutPstBanjo } from "../data/about-pst";
import ViewMore from "../components/view-more-btn";
import Navbar from "../components/navbar";

// card component
const Card = ({ children }) => (
  <div className="p-2 text-white bg-blue-500 rounded-lg shadow-lg w-[90%] mx-auto md:mx-0 md:w-auto">
    {children}
  </div>
);

const AboutBanjo = () => {
  return (
    <>
      <Navbar />
      <section className="container flex flex-col items-center justify-around my-4 ite md:m-4 md:flex-row font-tertiary pt-24">
        <div className="w-[35%] h-full p-1 border-4 rounded-md border-blue-500 mx-auto md:mx-0">
          <img
            src={AboutPstBanjo.img}
            alt={`Portrait of ${AboutPstBanjo.pstName}`}
            className="rounded-lg"
          />
        </div>
        <div className="max-w-md space-y-2">
          <h1 className="text-lg font-bold text-center text-blue-500 md:text-3xl md:mb-2">
            Who is {AboutPstBanjo.pstName}?
          </h1>

          <Card>
            <p>
              {AboutPstBanjo.pstName} {AboutPstBanjo.pstTitle}
            </p>
          </Card>

          {AboutPstBanjo.brief.map((text, i) => (
            <Card key={i}>
              <p>{text}</p>
            </Card>
          ))}

          <Card>
            <p>{AboutPstBanjo.education}</p>
          </Card>

          <Card>
            <p>{AboutPstBanjo.family}</p>
          </Card>

          <div className="flex justify-between">
            <ViewMore link="/book-list" text="Library" style="mx-4" />
            <ViewMore
              link={AboutPstBanjo.chatLink}
              text="Chat with Pst Banjo"
              style="mx-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanjo;
