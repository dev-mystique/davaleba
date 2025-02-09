import "./style.css";

function Card(props) {

    return (
        <div className="card">
            <h1>{props.item.name}</h1>
            <h4>{props.item.email}</h4>
        </div>
    );
}

export default Card;