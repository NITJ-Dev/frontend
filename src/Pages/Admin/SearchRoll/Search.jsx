import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../AdminSidebar";

const Search = () => {
  const [rollno, setRollNo] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!rollno) {
      newErrors.rollno = "Roll number is required.";
    } else if (!/^\d{8}$/.test(rollno)) {
      newErrors.rollno = "Roll number must be exactly 8 digits.";
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    navigate(`/SelfVerificationTable`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />
      <section className="min-h-screen lg:m-10 flex-1 items-center justify-center bg-white px-4 py-4 mt-8 md:py-0">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white border-1 border-blue-600 rounded-lg shadow-md overflow-hidden relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 text-blue-600 hover:text-blue-800 focus:outline-none"
          ></button>
          <div className="p-6 md:p-8 space-y-6">
            {/* <div className="flex items-center justify-center mb-6">
              <img className="w-24 h-24 md:w-32 md:h-32" src={logo} alt="Logo" />
            </div> */}
            <form className="space-y-4" onSubmit={handleSubmit} method="POST">
              <div>
                <label
                  htmlFor="rollno"
                  className="block mb-2 text-sm font-medium text-blue-900"
                >
                  Roll No.
                </label>
                <input
                  type="text"
                  name="rollno"
                  id="rollno"
                  value={rollno}
                  onChange={(e) => setRollNo(e.target.value)}
                  className={`bg-white border ${
                    errors.rollno ? "border-red-500" : "border-blue-300"
                  } text-blue-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5`}
                  placeholder="12345678"
                  required
                />
                {errors.rollno && (
                  <p className="mt-2 text-sm text-red-600">{errors.rollno}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
