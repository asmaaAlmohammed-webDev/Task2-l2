import "./NavigateCard.css";

const NavigateCard = ({item}) => {
  return (
    <div className="navigate-card">
      <h3 className="title">{item.title}</h3>
      <img src="/assets/imgs/Container.png" alt="line-img" />
      <p className="desc">{item.description}</p>
      <div className="more">
        <a href="#">
          Learn More
          <img src="/assets/imgs/Vector(Stroke)(1).svg" alt="Vector-img" />
        </a>
      </div>
    </div>
  );
};

export default NavigateCard;
