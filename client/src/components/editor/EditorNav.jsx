import { Description, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import AvatarWithMenu from "../partials/Avatar";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#eceff1",
    },
  },
});

export default function EditorNav({
  id,
  token,
  docId,
  docName,
  handleOpen,
  shareOption,
  getDocDetails,
}) {
  const navigate = useNavigate();
  const [input, setInput] = useState(false);
  const formik = useFormik({
    initialValues: {
      docName: "",
    },
    onSubmit: handleSubmit,
  });

  async function handleSubmit() {
    setInput(!input);
    if (formik.values.docName.length === 0) {
      formik.values.docName = "Untitled Document";
      return;
    }
    const formdata = new FormData();
    formdata.append("docName", formik.values.docName);
    await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_BACKEND_URL}/user/${id}/document/${docId}`,
      data: formdata,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => getDocDetails())
      .catch((err) => console.log(err));
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ position: "sticky", top: 0, zIndex: 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton onClick={() => navigate("/")}>
              <Description sx={{ fontSize: 40, color: "#0091ea", mr: 1 }} />
            </IconButton>
            {input ? (
              <Box component="form" onSubmit={formik.handleSubmit}>
                <TextField
                  name="docName"
                  size="small"
                  value={formik.values.docName}
                  onChange={formik.handleChange}
                  onFocus={(event) => event.target.select()}
                />
              </Box>
            ) : (
              <Typography
                sx={{ cursor: "pointer" }}
                component="div"
                onClick={() => setInput(!input)}
              >
                {docName}
              </Typography>
            )}
            <Box ml="auto">
              <Button
                variant="contained"
                color="info"
                endIcon={<Send />}
                sx={{
                  mr: 2,
                  borderRadius: 10,
                  display: !shareOption && "none",
                }}
                onClick={handleOpen}
              >
                Share
              </Button>
              <AvatarWithMenu />
            </Box>
          </Toolbar>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}
