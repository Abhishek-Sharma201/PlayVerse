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
import { Lock, Email } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Login = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/background.jpg')`,
        // backgroundcolour: "black",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Content Wrapper */}
      <div
        className="rounded-xl shadow-lg w-[900px] p-8 flex"
        style={{
          backgroundColor: "rgba(10, 25, 47, 0.8)", // Dark blue background
          boxShadow: "0 0 30px rgba(0, 255, 255, 0.8)", // Neon glow effect
          border: "2px solid rgba(0, 255, 255, 0.6)",
        }}
      >
        {/* Left Section */}
        <div className="w-1/2 text-white px-6 py-10">
          <h1 className="text-4xl font-bold mb-6">Play Verse</h1>
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-gray-300 mb-6">
            Play Your Way—Discover, Connect, and Engage with Playverse!
          </p>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="#" className="hover:text-cyan-400">
              <FacebookIcon />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <TwitterIcon />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <YouTubeIcon />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <InstagramIcon />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8 rounded-lg">
          <h2 className="text-white text-2xl font-bold mb-6">Log In</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-blue-900 text-white rounded-md outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-300 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-blue-900 text-white rounded-md outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="mr-2 accent-cyan-400" />
                Remember Me
              </label>
              <a href="#" className="text-cyan-400 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black py-2 rounded-md hover:bg-cyan-500 transition duration-200"
            >
              Log In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-300 text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="text-cyan-400 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
