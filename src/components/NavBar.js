import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

export const NavBar = () => {
  return (
    <header>
      <span className="heading">
        <Link to="/">Movie App</Link>
      </span>
      <IconButton edge="end" component={Link} to="/add">
        <AddIcon />
      </IconButton>
    </header>
  );
};
