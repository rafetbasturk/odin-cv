import React, { Component } from 'react';
import Profile from '../Profile';
import Experiences from '../Experiences';
import Education from '../Education';

class Preview extends Component {
  render() {
    const { mode, profile, experiences, education } = this.props.data
    const { handleEdit, handleDelete } = this.props

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
}

export default Preview;