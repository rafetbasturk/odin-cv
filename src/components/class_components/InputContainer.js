import React, { Component } from 'react';
import FormEducation from '../FormEducation';
import FormExperience from '../FormExperience';
import FormProfile from '../FormProfile';


class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.accordion = this.accordion.bind(this)
  }

  accordion = () => {
    document.querySelectorAll("details").forEach(el => {
      el.removeAttribute("open")
    })
  }

  render() {
    const {
      handleChange,
      handleFile,
      handleAdd,
      submitEdit,
      data
    } = this.props

    return (
      <div className='forms'>
        <FormProfile
          handleChange={handleChange}
          handleFile={handleFile}
          mode={data.mode}
          data={data.profile}
          accordion={this.accordion} />
        <FormExperience
          handleAdd={handleAdd}
          submitEdit={submitEdit}
          mode={data.mode}
          data={data.experiences}
          accordion={this.accordion} />
        <FormEducation
          handleAdd={handleAdd}
          submitEdit={submitEdit}
          mode={data.mode}
          data={data.education}
          accordion={this.accordion} />
      </div>
    );
  }
}

export default InputContainer;