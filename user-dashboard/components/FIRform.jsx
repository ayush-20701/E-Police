import { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';
import '../styles/FIRform.css'; // Import your CSS file

export default function FIRForm() {
  const [formData, setFormData] = useState({
    userName: '',
    firType: 'General FIR',
    description: '',
    location: '',
    files: []
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitStatus('success');

    setTimeout(() => {
      setSubmitStatus(null);
      setFormData({
        userName: '',
        firType: 'General FIR',
        description: '',
        location: '',
        files: []
      });
      document.getElementById('fileInput').value = '';
    }, 3000);
  };

  return (
    <div className="fir-form-container">
      <div className="form-header">
        <h1>Enter FIR Details</h1>
        <div className="header-underline"></div>
      </div>

      {submitStatus === 'success' && (
        <div className="success-alert">
          <CheckCircle className="icon" size={20} />
          <span>FIR details submitted successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="fir-form">
        <div className="form-group">
          <label htmlFor="userName">User Name <span>*</span></label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="firType">FIR Type <span>*</span></label>
          <select
            id="firType"
            name="firType"
            value={formData.firType}
            onChange={handleChange}
            required
          >
            <option value="General FIR">General FIR</option>
            <option value="Counter FIR">Counter FIR</option>
            <option value="Zero FIR">Zero FIR</option>
            <option value="Second FIR">Second FIR</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">FIR Description <span>*</span></label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">FIR Location <span>*</span></label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fileInput">Evidence Files</label>
          <div className="file-upload-box">
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              multiple
              className="hidden"
            />
            <label htmlFor="fileInput" className="file-upload-label">
              <Upload className="upload-icon" />
              <span>Click to upload evidence files</span>
              <span className="hint-text">(Images, documents, videos, audio)</span>
            </label>
            {formData.files.length > 0 && (
              <div className="file-count">
                {Array.from(formData.files).length} files selected
              </div>
            )}
          </div>
        </div>

        <div className="submit-button-container">
          <button type="submit">Submit FIR</button>
        </div>
      </form>
    </div>
  );
}
