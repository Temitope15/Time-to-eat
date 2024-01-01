import Card from "../components/card";
import { banjoDiary } from "./../data/banjo-diary";
const Diary = () => {
  return (
    <section className=" pt-24">
      <Card pages={banjoDiary} instersection={{ once: true }} />
    </section>
  );
};

export default Diary;
