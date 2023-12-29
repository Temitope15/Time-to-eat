import Card from "../components/card";
import { banjoDiary } from "./../data/banjo-diary";
const Diary = () => {
  return (
    <>
      <Card pages={banjoDiary} />
    </>
  );
};

export default Diary;
