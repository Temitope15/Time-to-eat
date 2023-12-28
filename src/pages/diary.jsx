import Card from "../components/card";
import Navbar from "../components/navbar";
import { banjoDiary } from "./../data/banjo-diary";
const Diary = () => {
  return (
    <>
      <Navbar />
      <Card pages={banjoDiary} />
    </>
  );
};

export default Diary;
