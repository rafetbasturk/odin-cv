import React, { Component } from 'react';

class FormEducation extends Component {
  render() {
    const {
      handleAdd,
      submitEdit,
      accordion,
      mode,
      data
    } = this.props
    const { from, to, school, department } = data
    return (
      <details id='details-edu'>
        <summary onClick={accordion}>Education</summary>
        <form onSubmit={mode === "add" ? handleAdd : submitEdit} id="edu">
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
            name="school"
            id="school"
            placeholder='School Name'
            value={school}
          />
          <input
            type="text"
            name="department"
            id="department"
            placeholder='Department'
            value={department}
          />
          <button type="submit">{mode === "add" ? "Add Education": "Submit Edit"}</button>
        </form>
      </details>
    );
  }
}
 
export default FormEducation;