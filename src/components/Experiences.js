import { MdWork, MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Experiences = ({data: experiences, mode, handleDelete, handleEdit}) => {
  return (
    <section className='experience'>
      <MdWork className='icon' />
      <h3>Work Experience</h3>
      {
        experiences.length > 0 &&
        <div className="content-container">
          {experiences.map(exp => {
            return (
              <div className="content exp" key={exp.id} data-id={exp.id}>
                {mode === "edit" &&
                  <div className="edit">
                    <FaEdit onClick={handleEdit} className="edit-btn" />
                    <MdDeleteOutline onClick={handleDelete} className='delete-btn' />
                  </div>}
                <div className="dot"></div>
                <div className="years">
                  <span>{exp.from}</span> - <span>{exp.to}</span>
                </div>
                <div className="details">
                  <div className="company">{exp.company}</div>
                  <div className="position">{exp.position}</div>
                  <div className="description">{exp.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      }
    </section>
  );
}

export default Experiences;