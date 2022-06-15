import { FaBookReader, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function Education({data: education, mode, handleDelete, handleEdit}) {
  return (
    <section className="education">
      <FaBookReader className='icon' />
      <h3>Education</h3>
      {
        education.length > 0 &&
        <div className="content-container">
          {education.map(edu => {
            return (
              <div className="content edu" key={edu.id} data-id={edu.id}>
                {mode === "edit" &&
                  <div className="edit">
                    <FaEdit onClick={handleEdit} className="edit-btn" />
                    <MdDeleteOutline onClick={handleDelete} className='delete-btn' />
                  </div>}
                <div className="dot"></div>
                <div className="years">
                  <span>{edu.from}</span> - <span>{edu.to}</span>
                </div>
                <div className="details">
                  <div className="company">{edu.school}</div>
                  <div className="position">{edu.department}</div>
                </div>
              </div>
            )
          })}
        </div>
      }
    </section>
  );
}

export default Education;