import { useState } from 'react'
import './PersonForm.css'

function PersonForm({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    picture: null,
  })
  const [preview, setPreview] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handlePicture(e) {
    const file = e.target.files[0]
    if (file) {
      setForm({ ...form, picture: file })
      setPreview(URL.createObjectURL(file))
    }
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.role || !form.department) {
      alert('Please fill in all required fields')
      return
    }
    onSubmit(form)
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div>
            <h2>Add Team Member</h2>
            <p>Register a new member to the team</p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Profile Picture */}
        <div className="picture-upload">
          <div className="picture-circle">
            {preview ? (
              <img src={preview} alt="preview" className="picture-preview" />
            ) : (
              <span className="picture-placeholder">👤</span>
            )}
            <label className="picture-btn" htmlFor="picture-input">📷</label>
            <input
              id="picture-input"
              type="file"
              accept="image/*"
              onChange={handlePicture}
              style={{ display: 'none' }}
            />
          </div>
          <p className="picture-label">Profile Picture</p>
          <p className="picture-hint">JPG, PNG or GIF (Max. 5MB)</p>
        </div>

        {/* Full Name */}
        <div className="form-group">
          <label>Full Name *</label>
          <div className="input-wrapper">
            <span className="input-icon">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email Address *</label>
          <div className="input-wrapper">
            <span className="input-icon">✉️</span>
            <input
              type="email"
              name="email"
              placeholder="member@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone Number *</label>
          <div className="input-wrapper">
            <span className="input-icon">📞</span>
            <input
              type="tel"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Role */}
        <div className="form-group">
          <label>Role *</label>
          <div className="input-wrapper">
            <span className="input-icon">💼</span>
            <input
              type="text"
              name="role"
              placeholder="e.g. Developer, Designer, Manager"
              value={form.role}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Department */}
        <div className="form-group">
          <label>Department *</label>
          <div className="input-wrapper">
            <span className="input-icon">🏢</span>
            <input
              type="text"
              name="department"
              placeholder="e.g. Engineering, Marketing, Sales"
              value={form.department}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-submit" onClick={handleSubmit}>+ Add Member</button>
        </div>
      </div>
    </div>
  )
}

export default PersonForm