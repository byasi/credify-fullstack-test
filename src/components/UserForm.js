 import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:"",
    tin: "",
    nationalId: "",
    address: ""
  });
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation before submitting
    const newErrors = {};

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const tinRegex = /^\d{9}$/;
    const nationalIdRegex = /^[a-zA-Z0-9]{13}$/;
    const addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/;

    if(!nameRegex.test(formData.name)){
      newErrors.name = "Name must contain only letters and spaces.";
    }
    if(!emailRegex.test(formData.email)){
      newErrors.email = "Email is not valid.";
    }
    if(!phoneRegex.test(formData.phone)){
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if(!tinRegex.test(formData.tin)){
      newErrors.tin = "TIN must be 9 digits.";  
    }
    if(!nationalIdRegex.test(formData.nationalId)){
      newErrors.nationalId = "National ID must be 13 digits.";
    }
    if(!addressRegex.test(formData.address)){
      newErrors.address = "Address must be at least 3 characters long.";
    }
    if(Object.keys(newErrors).length> 0) {
      setErrors(newErrors);
      return
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      {errors.name && <div className='error'>{errors.name}</div>}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {errors.email && <div className='error'>{errors.email}</div>}
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      {errors.phone && <div className='error'>{errors.phone}</div>}
      <div className="form-group">
        <label htmlFor="tin">Tax Indentification Number(TIN):</label>
        <input
          type="text"
          id="tin"
          name="tin"
          value={formData.tin}
          onChange={handleChange}
          required
        />
      </div>
      {errors.tin && <div className='error'>{errors.tin}</div>}
      <div className="form-group">
        <label htmlFor="nationalId">National ID:</label>
        <input
          type="text"
          id="nationalId"
          name="nationalId"
          value={formData.nationalId}
          onChange={handleChange}
          required
        />
      </div>
      {errors.nationalId && <div className='error'>{errors.nationalId}</div>}
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      {errors.address && <div className='error'>{errors.address}</div>}
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {initialData ? 'Update User' : 'Add User'}
        </button>
        {onCancel && (
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm; 