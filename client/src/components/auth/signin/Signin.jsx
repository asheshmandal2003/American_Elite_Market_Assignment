import Form from "./Form";
import { Card, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FlexCenter } from "../../partials/FlexCenter";
import { useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../../state/auth";

export default function Signin() {
  const navigate = useNavigate();
  const phone = useMediaQuery("(max-width:600px)");
  const [logging, setLogging] = useState(false);
  const dispatch = useDispatch();

  const signin = async (values) => {
    setLogging(true);
    const formdata = new FormData();
    for (let value in values) formdata.append(value, values[value]);
    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_BACKEND_URL}/auth/signin`,
      data: formdata,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        dispatch(login({ user: result.data.user, token: result.data.token }));
        toast.success(`${result.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        navigate("/");
      })
      .catch((err) => {
        setLogging(false);
        toast.error("Invalid credentials!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  return (
    <FlexCenter>
      <Card
        sx={{
          p: phone ? 0 : 5,
          pt: phone ? 3 : 5,
          pb: phone ? 4 : 5,
          mt: phone ? 5 : 6,
          mb: phone ? 0 : 6,
          width: phone ? "90%" : 400,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" mb={4} fontWeight={600}>
          Sign In
        </Typography>
        <Form phone={phone} logging={logging} signin={signin} />
        <Typography mt={5}>
          Don't have an account?{" "}
          <Typography
            component="span"
            color="primary"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => navigate("/auth/signup")}
          >
            Sign up
          </Typography>
        </Typography>
      </Card>
    </FlexCenter>
  );
}
