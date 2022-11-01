import Home from "./components/Home";
import About from "./components/Product";
import Contact from "./components/Profile";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import "./App.css";
import Product from "./components/Product";
import Profile from "./components/Profile";
import Cart from "./components/Cart";

import { red } from "@mui/material/colors";
import React, { useState, useEffect, createContext } from "react";
import logo from "./logo.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, ThemeProvider } from "@mui/material";
import { userSchema } from "./schema/userForm";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import IconButton from '@mui/material/IconButton';
import PalleteButton from "./components/PalleteButton";

interface IFormInput {
  firstname: string;
}
export const ThemeContext = createContext({toggleMode: ()=>{}})
const App = () => {
  const { register, handleSubmit } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const [mode, setMode] = useState<"dark" | "light">("light");
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#F0F0F1",
            },
            secondary: {
              main: "#BCCEF8",
            },
            text: {
              primary: "black",
              secondary: "blue",
            },
            background: {
              default: "#F0F0F1",
            },
          }
        : {
            primary: { main: "#003B8E" },
            secondary: { main: "#1564BF" },
            text: {
              primary: "white",
              secondary: "blue",
            },
            background: {
              default: "#000000",
            },
          }),
    },
  });
  const manageTheme =  {
    toggleMode: () =>{
      setMode((prevMode)=>(prevMode ==="light" ? "dark" : "light"))
    }
  } 

  return ( 
    <ThemeContext.Provider value={manageTheme}>
    <ThemeProvider theme={theme}>
    
      <Box sx={{backgroundColor:'background.default', color:'text.primary'}} className="App">
      <PalleteButton/>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/users">
              <Route path="" element={<Users />}>
                {" "}
              </Route>
              <Route path=":id" element={<SingleUser />}></Route>
            </Route>
          </Routes>
          Footer
        </BrowserRouter>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <label htmlFor="firstname">Enter your first name</label>
            <input
              type="text"
              {...register("firstname")}
              placeholder="Title"
              id="title"
            />
          </div>
          <div className="form-item">
            <label htmlFor="lastname">Enter your last name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div className="form-item">
            <label htmlFor="email">Enter your email</label>
            <input type="password" name="email" id="email" />
          </div>
          <div className="form-item">
            <label htmlFor="password">Enter your password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="form-item">
            <label htmlFor="passwordConfirm">Confirm your password</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
            />
          </div>
          <div className="form-item">
            {/* <select name="status" id="status">
              <option value="none" selected disabled hidden>Status</option>
              <option value="done">Done</option>
              <option value="not started">Not started</option>
              <option value="in progress">In progress</option>
            </select> */}
          </div>
          <div className="form-item">
            <button type="submit" className="button button_sm">
              Add
            </button>
          </div>
        </form>

      </Box>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
