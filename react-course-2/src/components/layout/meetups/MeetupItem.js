import classes from './MeetupItem.module.css';

function MeetupItem(props){
    return <li>
        <div>
            <img src= {props.image} alt={props.title}/>
        </div>
        <div>
            <h3>{props.title}</h3>
            <address>{props.title}</address>
            <p>{props.description}</p>
        </div>
    <div>
        <button> to fav.</button>
    </div>
    </li>
}

export default MeetupItem;