import { React, useState } from "react";
import bgImage from "../assets/BackgroundImage.png";
import image from "../assets/image.png";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    return (
        <div>
        <div
            className="h-screen flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="bg-black bg-opacity-50 p-8 rounded-2xl w-96 shadow-lg">
                <h2 className="text-purple-400 text-5xl font-semibold text-center mb-6">
                    Sign up
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="text-purple-300 text-2xl block mb-1">Full Name</label>
                        <input
                            onChange={(e) => {
                                setFullName(e.target.value);
                            }}
                            placeholder="Full Name"
                            type="text"
                            className="w-full text-xl p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-purple-300 text-2xl block mb-1">Username</label>
                    
                        <input
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            placeholder="Username"
                            type="text"
                            className="w-full p-3 text-xl rounded-lg bg-gray-900 text-white placeholder-gray-400"
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <div className="w-1/2">
                            <label className="text-purple-300  block mb-1">Password</label>
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type="password"
                                placeholder="********"
                                className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="text-purple-300  block mb-1">Confirm Password</label>
                            <input
                                onChange={(e) => {
                                    setConfirmPass(e.target.value);
                                }}
                                type="password"
                                placeholder="********"
                                className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <button
                        onClick={async (event) => {
                            event.preventDefault();
                            try {
                                if(password==confirmPass){
                                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                        username,
                                        password,
                                        fullName,
                                    });
                                    if (response.status === 201 || response.status === 200) {
                                        localStorage.setItem("username", username);
                                        localStorage.setItem("signedIn", true);
                                        navigate("/dashboard");
                                    } else {
                                        console.error("Unexpected response:", response);
                                        alert("Failed to create account. Please try again.");
                                    }
                                }else{
                                    alert("Passwords Do not Match")
                                }
                            } catch (error) {
                                console.error("Error during signup:", error);
                                alert("An error occurred. Please check your input or try again later.");
                            }
                        }}
                        className="w-full bg-purple-500 hover:bg-purple-600 text-white cursor-pointer font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Create Account
                    </button>
                    <div className="text-center text-purple-300 mt-4">Or</div>
                    <button
                        type="button"
                        onClick={() => {
                            try {
                                navigate('/signin');
                            } catch (error) {
                                console.error("Error during navigation:", error);
                                alert("An error occurred while navigating. Please try again.");
                            }
                        }}
                        className="w-full bg-white cursor-pointer text-black font-semibold py-3 rounded-lg mt-2"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-4 md:mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Section with Image */}
          <div className="w-full md:w-1/2 h-96 md:h-auto">
            <img
              src={`${image}`} // make sure to place the image in the public folder
              alt="NFT Art"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Right Section with Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Account</h2>
            <p className="text-gray-300 mb-8">
              Welcome! Enter your details and start creating, collecting and selling NFTs.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition duration-300"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
};

export default SignupForm;
