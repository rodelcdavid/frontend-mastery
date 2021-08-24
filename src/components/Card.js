import './Card.css'

const Card = (props) => {
    const {title, date, link} = props;
    
    return (
    <a href = {`https://rodelcdavid.github.io/archive-ui-practice/files/${link}/`} className='card'>
            <h1>{title}</h1>
            <p>{date}</p>
    </a>
    );
}

export default Card;


