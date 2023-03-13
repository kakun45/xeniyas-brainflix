import "./NotFound.scss";
import notFoundImg from "../../assets/images/error.png";

function NotFoundPage() {
  return (
    <>
      <h1 className="notFound__headline">
        Can't find what you're looking for, sorry!
      </h1>
      <div className="notFound__parent">
        <img
          className="notFound__img"
          src={notFoundImg}
          alt="404 page is not found with a broken robot"
        />
      </div>
    </>
  );
}
export default NotFoundPage;
