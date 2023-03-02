import "./Sidebar.scss";
import videos from "../../data/videos.json";
import ContentCard from "../ContentCard/ContentCard";

function Sidebar() {
  videos.map((el) => {
    console.log(el);
  });
  return (
    <div>
      <ContentCard 
      title={title}
      />
    </div>
  );
}

export default Sidebar;
