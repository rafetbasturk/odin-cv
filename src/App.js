import { useState } from 'react';
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

function App() {
  const [mode, setMode] = useState(initialState.mode);
  const [profile, setProfile] = useState(initialState.profile);
  const [experiences, setExperiences] = useState(initialState.experiences);
  const [education, setEducation] = useState(initialState.education);
  const [editId, setEditId] = useState(initialState.editId);

  const setEdit = () => {
    setMode("edit")
    accordion(document.querySelector("#details-pro"))
  }

  const handleChange = e => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const handleFile = e => {
    const { name, files } = e.target
    const reader = new FileReader()
    reader.onload = (() => {
      setProfile({ ...profile, [name]: reader.result })
    });
    reader.readAsDataURL(files[0])
  }

  const handleAdd = e => {
    e.preventDefault()
    const id = new Date().getTime()
    let obj = { id }
    Array.from(e.target.elements).forEach(el => {
      const { name, value } = el
      if (name) {
        obj = { ...obj, [name]: value }
      }
    })

    if (e.target.id === "exp") {
      setExperiences([...experiences, obj])
    }
    else {
      setEducation([...education, obj])
    }

    e.target.reset()
  }

  const submitEdit = e => {
    e.preventDefault()
    const id = editId
    let obj = { id }
    Array.from(e.target.elements).forEach(el => {
      const { name, value } = el
      if (name) {
        obj = { ...obj, [name]: value }
      }
    })

    if (e.target.id === "exp") {
      setExperiences(experiences.map(exp => exp.id === id ? obj : exp))
    }
    else {
      setEducation(education.map(edu => edu.id === id ? obj : edu))
    }

    setMode("add")
    e.target.reset()
  }

  const handleEdit = e => {
    const target = e.currentTarget.parentElement.parentElement
    accordion(target)
    const targetId = Number(target.dataset.id)
    setEditId(targetId)

    if (target.classList.contains("edu")) {
      const {
        from,
        to,
        school,
        department
      } = education.filter(edu => edu.id === targetId)[0]

      const form = document.querySelector("#edu")
      form.elements[0].value = from
      form.elements[1].value = to
      form.elements[2].value = school
      form.elements[3].value = department
    }
    else {
      const {
        from,
        to,
        company,
        position,
        description
      } = experiences.filter(exp => exp.id === targetId)[0]

      const form = document.querySelector("#exp")
      form.elements[0].value = from
      form.elements[1].value = to
      form.elements[2].value = company
      form.elements[3].value = position
      form.elements[4].value = description
    }
  }

  const handleDelete = e => {
    const el = e.currentTarget.parentElement.parentElement
    const id = Number(el.dataset.id)
    if (el.classList.contains("edu")) {
      setEducation(prev => prev.filter(edu => edu.id !== id))
    }
    else {
      setExperiences(prev => prev.filter(edu => edu.id !== id))
    }
  }

  const clearPreview = () => {
    setMode(initialState.mode)
    setProfile(initialState.profile)
    setExperiences(initialState.experiences)
    setEducation(initialState.education)
  }

  const setPreview = () => {
    setMode(previewState.mode)
    setProfile(previewState.profile)
    setExperiences(previewState.experiences)
    setEducation(previewState.education)
  }

  return (
    <>
      <main className="input-container">
        <InputContainer
          mode={mode}
          profile={profile}
          experiences={experiences}
          education={education}
          handleChange={handleChange}
          handleFile={handleFile}
          handleAdd={handleAdd}
          submitEdit={submitEdit}
        />

        <div className="btn-container">
          <button onClick={clearPreview}>Clear Preview</button>
          <button onClick={setEdit}>Edit</button>
          <button onClick={setPreview}>Sample Preview</button>
        </div>
      </main>
      <Preview
        mode={mode}
        profile={profile}
        experiences={experiences}
        education={education}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;