import "./BenefitsCard.css";
const BenefitsCard = ({ item }) => {
  return (
    <div className="benefits-card" data-aos="fade-right">
      <h4 className="title">{item.title}</h4>
      <p className="desc">{item.desc}</p>
      <div className="icon">
        <img src={item.img} alt="logo-img" />
      </div>
    </div>
  );
};

export default BenefitsCard;
