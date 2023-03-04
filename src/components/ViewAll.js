import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

export function ViewAll() {
  const navigate = useNavigate();

  // movies array
  var [movies, setMovies] = useState([]);

  // Call to get all movie details
  const getMovies = async () => {
    await axios.get("http://localhost:5001/api").then((response) => {
      setMovies((movies = response.data));
    });
  };

  // Search thru movie list; Text search except for release year
  const searchMovies = async (text) => {
    await axios
      .get("http://localhost:5001/api/search", {
        params: {
          text: text,
        },
      })
      .then((response) => {
        setMovies((movies = response.data));
      });
  };

  // Delete a movie
  const deleteMovieDetail = (id) => {
    axios
      .post("http://localhost:5001/api/delete", { _id: id })
      .then((response) => {
        getMovies();
      });
  };

  // Open Edit wondow
  const editMovieDetail = (row) => {
    navigate("/edit", {
      state: row,
    });
  };

  // UseEffect hook to get all movies
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <TextField
        id="standard-basic"
        variant="standard"
        label="Search for all fields, but year"
        name="text"
        onChange={(e) => searchMovies(e.target.value)}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Actor</TableCell>
              <TableCell align="right">Actress</TableCell>
              <TableCell align="right">Director</TableCell>
              <TableCell align="right">Released Year</TableCell>
              <TableCell align="right">Camera</TableCell>
              <TableCell align="right">Producer</TableCell>
              <TableCell align="right">Language</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.actor}</TableCell>
                <TableCell align="right">{row.actress}</TableCell>
                <TableCell align="right">{row.director}</TableCell>
                <TableCell align="right">{row.releasedyear}</TableCell>
                <TableCell align="right">{row.camera}</TableCell>
                <TableCell align="right">{row.producer}</TableCell>
                <TableCell align="right">{row.language}</TableCell>
                <TableCell align="right">
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => editMovieDetail(row)}
                  >
                    <EditIcon />
                  </IconButton>
                  &nbsp;
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteMovieDetail(row._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
