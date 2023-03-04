import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export function AddMovie() {
  const navigate = useNavigate();
  var { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:5001/api/add", data).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="form">
      <h1>Add</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Name"
          name="name"
          {...register("name", {
            required: "Required",
          })}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Actor"
          name="actor"
          {...register("actor", {
            required: "Required",
          })}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Actress"
          name="actress"
          {...register("actress", {
            required: "Required",
          })}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Director"
          name="director"
          {...register("director", {
            required: "Required",
          })}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Released Year"
          name="releasedyear"
          {...register("releasedyear", {
            required: "Required",
          })}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Camera"
          name="camera"
          {...register("camera", {
            required: "Required",
          })}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Producer"
          name="producer"
          {...register("producer", {
            required: "Required",
          })}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Language"
          name="language"
          {...register("language", {
            required: "Required",
          })}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
}
