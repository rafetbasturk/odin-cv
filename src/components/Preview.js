import Profile from './Profile';
import Experiences from './Experiences';
import Education from './Education';

const Preview = ({ mode, profile, experiences, education, handleEdit, handleDelete }) => {
  return (
    <aside className='preview'>
      <Profile data={profile} />
      <Experiences
        mode={mode}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        data={experiences} />
      <Education
        mode={mode}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        data={education} />
    </aside>
  );
}

export default Preview;