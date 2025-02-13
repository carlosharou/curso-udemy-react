import './ConceptItem.css';

const ConceptItem = (props) => {
    return (
        <li className="concept">
            <img src={props.data.image} alt={props.data.title} />
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </li>
    );
}

export default ConceptItem;