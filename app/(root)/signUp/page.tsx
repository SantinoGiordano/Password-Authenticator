'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import Router from 'next/router';

interface SignUpFormData {
  firstname: string;
  lastname: string;
  middleInit: string;
  username: string;
  password: string;
  age: string;
  email: string;
  phone_number: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstname: '',
    lastname: '',
    middleInit: '',
    username: '',
    password: '',
    age: '',
    email: '',
    phone_number: '',
  });

  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccessMessage(data.message);
      Router.push('/userLandingPage'); 
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-green-300 p-6 rounded-lg max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="middleInit"
            value={formData.middleInit}
            onChange={handleChange}
            placeholder="Middle Initial"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded"
          />

          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
