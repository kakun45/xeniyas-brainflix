const Details = ({ featuredVideo }) => {
  return (
    <section>
      <h1 className="details__title">{featuredVideo.title}</h1>
      <h2 className="details__channel">By {featuredVideo.channel}</h2>
      <p className="details__date">{featuredVideo.timestamp}</p>
      <div className="details__views">{featuredVideo.views}</div>
      <div className="details__likes">{featuredVideo.likes}</div>
      <p className="details__text">{featuredVideo.description}</p>
      <h3 className="details__coment-count">
        {featuredVideo.comments.length} Comments
      </h3>
      <div className="join-conv">
        <h2>JOIN THE CONVERSATION</h2>
        <img className="avatar" alt="head" />
        <input
          className="join-conv__input"
          placeholder="Add a new coment"></input>
        <button className="join-conv__btn"></button>
        <hr></hr>
        <img className="default-avatar" />
      </div>
    </section>
  );
};
export default Details;
