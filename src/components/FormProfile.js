import { AiOutlineUpload } from "react-icons/ai";

const FormProfile = ({ accordion, data, handleChange, handleFile }) => {
  const { fname, lname, title, address, phone, email, about } = data
  return (
    <details id='details-pro' open>
      <summary onClick={accordion}>Profile</summary>
      <form id='pro'>
        <input
          type="text"
          name='fname'
          id='fname'
          placeholder='First Name'
          value={fname}
          onChange={handleChange}
        />
        <input
          type="text"
          name='lname'
          id='lname'
          placeholder='Last Name'
          value={lname}
          onChange={handleChange}
        />
        <input
          type="text"
          name='title'
          id='title'
          placeholder='Job Title'
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          name='address'
          id='address'
          placeholder='Address'
          value={address}
          onChange={handleChange}
        />
        <input
          type="text"
          name='phone'
          id='phone'
          placeholder='Phone'
          value={phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name='email'
          id='email'
          placeholder='Email'
          value={email}
          onChange={handleChange}
        />
        <textarea
          name="about"
          id="about"
          placeholder='About Me'
          value={about}
          onChange={handleChange}
        ></textarea>
        <div className='file-input-container'>
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleFile}
            className="file-input"
          />
          <label htmlFor="avatar">
            <AiOutlineUpload /> Choose a profile picture
          </label>
        </div>
      </form>
    </details>
  );
}

export default FormProfile;