import "./../../../App.css"
import "./HouseDescription.css"
let HouseDescription = (props) => {

  console.log(props)
  return (
    <div className="HouseDescription">
      {/* <img src={props.image} alt="house"/>
      <div className="House__name">
        <p>{props.name}</p>
      </div>
      <div>
      <button >Подробнее</button>
      </div> */}
      <div className="container">
        <div className="houseWrapper">
            <h1>Дом {props.oneHouse.name}</h1>
            <img src={`./images/${props.oneHouse.image}`}/>
            <p>Описание{props.oneHouse.description}</p>
        </div>
      </div>
    </div>
    
  );
};

export default HouseDescription;
