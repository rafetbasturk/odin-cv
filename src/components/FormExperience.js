const FormExperience = ({ accordion, mode, data, handleAdd, submitEdit }) => {
  const { from, to, company, position, description } = data
  return (
    <details id='details-exp'>
      <summary onClick={accordion}>Work Experience</summary>
      <form onSubmit={mode === "add" ? handleAdd : submitEdit} id="exp">
        <input
          type="text"
          name="from"
          id="from"
          placeholder='From'
          value={from}
        />
        <input
          type="text"
          name="to"
          id="to"
          placeholder='To'
          value={to}
        />
        <input
          type="text"
          name="company"
          id="company"
          placeholder='Company Name'
          value={company}
        />
        <input
          type="text"
          name="position"
          id="position"
          placeholder='Position'
          value={position}
        />
        <input
          type="text"
          name="description"
          id="description"
          placeholder='Description'
          value={description}
        />
        <button type="submit">{mode === "add" ? "Add Experience" : "Submit Edit"}</button>
      </form>
    </details>
  );
}

export default FormExperience;