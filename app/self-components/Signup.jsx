import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Grid,
  InputAdornment,
} from "@mui/material";
import { Lock, Email } from "@mui/icons-material"; // Importing icons
import FacebookIcon from "@mui/icons-material/Facebook"; // Importing Facebook icon
import TwitterIcon from "@mui/icons-material/Twitter"; // Importing Twitter icon
import YouTubeIcon from "@mui/icons-material/YouTube"; // Importing YouTube icon
import InstagramIcon from "@mui/icons-material/Instagram"; // Importing Instagram icon
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Importing LinkedIn icon

const Signup = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/backgroun3.jpg')`, // Replace with your actual image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Ensures full coverage even on scrolling
      }}
    >
      {/* Content Wrapper */}
      <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg w-[900px] p-8 flex">
        {/* Left Section */}
        <div className="w-1/2 text-white px-6 py-10">
          <h1 className="text-4xl font-bold mb-6">Play Verse</h1>
          <h2 className="text-3xl font-bold mb-2">Join Us!</h2>
          <p className="text-gray-300 mb-6">
            Play Your Way—Discover, Connect, and Engage with Playverse!
          </p>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="#" className="hover:text-white">
              <FacebookIcon />
            </a>
            <a href="#" className="hover:text-white">
              <TwitterIcon />
            </a>
            <a href="#" className="hover:text-white">
              <YouTubeIcon />
            </a>
            <a href="#" className="hover:text-white">
              <InstagramIcon />
            </a>
            <a href="#" className="hover:text-white">
              <LinkedInIcon />
            </a>
          </div>

          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8 rounded-lg backdrop-blur-md">
          <h2 className="text-white text-2xl font-bold mb-6">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-400 text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-400 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-400 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-gray-400 text-sm font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-pink-400 hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
