import './CategoryItem.css';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
    const {id, title, image, readyInMinutes} = props;
    return (
        <div className="card" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={image} alt={title}/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">{title}</span>
            </div>
                <span className="time"><i className="material-icons">access_time</i> {`Cooking time ${readyInMinutes} min`}</span>
                <Link to={`/recipe/${id}`} className='btn right'><i className="material-icons">whatshot</i> Let's go</Link>
        </div>
    )
}

export default CategoryItem