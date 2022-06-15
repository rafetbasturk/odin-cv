import FormEducation from './FormEducation';
import FormExperience from './FormExperience';
import FormProfile from './FormProfile';

const InputContainer = ({mode, profile, experiences, education, handleChange, handleFile, handleAdd, submitEdit}) => {
  const accordion = () => {
    document.querySelectorAll("details").forEach(el => {
      el.removeAttribute("open")
    })
  }
  return (
    <div className='forms'>
      <FormProfile
        handleChange={handleChange}
        handleFile={handleFile}
        mode={mode}
        data={profile}
        accordion={accordion} />
      <FormExperience
        handleAdd={handleAdd}
        submitEdit={submitEdit}
        mode={mode}
        data={experiences}
        accordion={accordion} />
      <FormEducation
        handleAdd={handleAdd}
        submitEdit={submitEdit}
        mode={mode}
        data={education}
        accordion={accordion} />
    </div>
  );
}

export default InputContainer;