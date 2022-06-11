import React, { Component } from "react";
import InputContainer from "./components/InputContainer";
import Preview from "./components/Preview";
import placeholder from "./images/avatar_placeholder.png";
import previewImg from "./images/profile-picture.jpg";

const accordion = (target) => {
  document.querySelectorAll("details").forEach(detail => {
    detail.removeAttribute("open")
  })

  if (target.classList.contains("edu")) {
    document.querySelector("#details-edu").setAttribute("open", true)
  }
  else if (target.classList.contains("exp")) {
    document.querySelector("#details-exp").setAttribute("open", true)
  }
  else {
    document.querySelector("#details-pro").setAttribute("open", true)
  }
}

const initialState = {
  mode: "add",
  editId: "",
  profile: {
    fname: "",
    lname: "",
    title: "",
    address: "",
    phone: "",
    email: "",
    about: "",
    avatar: placeholder,
  },
  experiences: [],
  education: []
}

const previewState = {
  mode: "add",
  editId: "",
  profile: {
    fname: "john",
    lname: "brown",
    title: "junior web developer",
    address: "bcd building",
    phone: "123456789",
    email: "john@sample.com",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dolores rerum! Vero iste aliquam placeat maxime ab culpa dignissimos id quaerat quod, eveniet vel rerum accusamus suscipit consequatur nesciunt, voluptatibus dolore numquam!",
    avatar: previewImg,
  },
  experiences: [
    {
      id: 0,
      from: "2019",
      to: "2020",
      company: "Abc Inc.",
      position: "Junior Front-end Developer",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores a iste, minima aspernatur ipsa adipisci."
    },
    {
      id: 1,
      from: "2020",
      to: "2022",
      company: "Def Inc.",
      position: "Senior Front-end Developer",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores a iste, minima aspernatur ipsa adipisci."
    },
  ],
  education: [
    {
      id: 0,
      from: "1999",
      to: "2003",
      school: "KHO",
      department: "War College"
    },
    {
      id: 1,
      from: "1995",
      to: "1999",
      school: "High School",
      department: "-"
    },
  ]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.setPreview = this.setPreview.bind(this)
    this.clearPreview = this.clearPreview.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.setEdit = this.setEdit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        [name]: value
      }
    })
  }

  handleFile = e => {
    const { name, files } = e.target
    const reader = new FileReader()
    reader.onload = (() => {
      this.setState({
        ...this.state,
        profile: {
          ...this.state.profile,
          [name]: reader.result
        }
      })
    });
    reader.readAsDataURL(files[0])
  }

  setPreview = () => {
    this.setState(previewState)
  }

  clearPreview = e => {
    this.setState(initialState)
  }

  handleAdd = e => {
    e.preventDefault()
    const id = new Date().getTime()
    let obj = { id }
    Array.from(e.target.elements).forEach(el => {
      const { name, value } = el
      if (name) {
        obj = { ...obj, [name]: value }
      }
    })

    this.setState(prev => {
      if (e.target.id === "exp") {
        return {
          ...prev,
          experiences: [...prev.experiences, obj]
        }
      }
      else {
        return {
          ...prev,
          education: [...prev.education, obj]
        }
      }
    })

    e.target.reset()
  }

  setEdit = () => {
    this.setState({
      ...this.state, mode: "edit"
    })
    accordion(document.querySelector("#details-pro"))
  }

  handleEdit = e => {
    const target = e.currentTarget.parentElement.parentElement
    accordion(target)
    const targetId = Number(target.dataset.id)
    this.setState({
      ...this.state,
      editId: targetId
    })

    if (target.classList.contains("edu")) {
      const {
        from,
        to,
        school,
        department
      } = this.state.education.filter(edu => edu.id === targetId)[0]

      const form = document.querySelector("#edu")
      form.elements[0].value = from
      form.elements[1].value = to
      form.elements[2].value = school
      form.elements[3].value = department
    }
    else if (target.classList.contains("exp")) {
      const {
        from,
        to,
        company,
        position,
        description
      } = this.state.experiences.filter(exp => exp.id === targetId)[0]

      const form = document.querySelector("#exp")
      form.elements[0].value = from
      form.elements[1].value = to
      form.elements[2].value = company
      form.elements[3].value = position
      form.elements[4].value = description
    }
  }

  submitEdit = e => {
    e.preventDefault()
    const id = this.state.editId
    let obj = { id }
    Array.from(e.target.elements).forEach(el => {
      const { name, value } = el
      if (name) {
        obj = { ...obj, [name]: value }
      }
    })

    this.setState(prev => {
      if (e.target.id === "exp") {
        return {
          ...prev,
          mode: "add",
          experiences: prev.experiences.map(exp => exp.id === id ? obj : exp )
        }
      }
      else {
        return {
          ...prev,
          mode: "add",
          education: prev.education.map(edu => edu.id === id ? obj : edu )
        }
      }
    })

    e.target.reset()
  }

  handleDelete = e => {
    const el = e.currentTarget.parentElement.parentElement
    const id = Number(el.dataset.id)
    this.setState(prev => {
      if (el.classList.contains("edu")) {
        return {
          ...prev,
          education: prev.education.filter(edu => edu.id !== id)
        }
      }
      else {
        return {
          ...prev,
          experiences: prev.experiences.filter(edu => edu.id !== id)
        }
      }
    })
  }

  render() {
    return (
      <>
        <main className="input-container">
          <InputContainer
            data={this.state}
            handleChange={this.handleChange}
            handleFile={this.handleFile}
            handleAdd={this.handleAdd}
            submitEdit={this.submitEdit}
          />

          <div className="btn-container">
            <button onClick={this.clearPreview}>Clear Preview</button>
            <button onClick={this.setEdit}>Edit</button>
            <button onClick={this.setPreview}>Sample Preview</button>
          </div>
        </main>
        <Preview
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          data={this.state} />
      </>
    );
  }
}

export default App;
