// components/UserForm.tsx
"use client";
import React, { useState } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const UserForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // כאן תוכל לשלוח את הנתונים לשרת או לבצע פעולה כלשהי
    console.log("Form submitted with data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">שם משתמש:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">אימייל:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">סיסמא:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">שלח</button>
    </form>
  );
};

export default UserForm;
