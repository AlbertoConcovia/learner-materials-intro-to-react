
function Card(props) {
    return (
        <div className="card">
        <h3 className="card__text card__header">{props.name}</h3>
        <img className="card__image" src={props.src} alt={props.alt}></img>
        <p className="card__text">Species:{props.species}</p>
        <p className="card__text">Favourite Food(s):{props.food}</p>
        <p className="card__text">Birth Year:{props.birth}</p>
      </div>
    )
}

export default Card;
