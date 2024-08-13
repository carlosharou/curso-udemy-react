import './Concepts.css';
import ConceptItem from '../ConceptItem/ConceptItem';

const Concepts = (props) => {
    return (
        <ul id="concepts">{
            props.data.map((item, index) => {
                return (
                    <ConceptItem key={index} data={item} />
                )
            })
        }</ul>
    )
}

export default Concepts;