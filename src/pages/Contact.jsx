import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-6">Get in Touch</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
            <textarea
              {...register("message")}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
