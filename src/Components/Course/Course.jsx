const Course = ({ course, handleAddToBookmarks }) => {
  const {name, photo, description, price, credit } = course;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt={`this is the name of the ${name}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <p><LuDollarSign />Price: {price}</p>
            <p><BsBook />Credit: {credit}</p>
          </div>
          <div className="card-actions">
            <button onClick={()=> handleAddToBookmarks(course)} className="btn btn-primary w-full">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
import { LuDollarSign } from "react-icons/lu";
import { BsBook } from "react-icons/bs";


