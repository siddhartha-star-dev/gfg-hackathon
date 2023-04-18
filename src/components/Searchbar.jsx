import { useState } from "react";
import { TextField } from "@mui/material";

const Searchbar = (props) => {
  //   const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="mx-14 mt-10">
        <TextField
          id="outlined-basic"
          label="Search By Category"
          variant="outlined"
          onChange={props.onChangeHandler}
          value={props.searchTerm}
        />
      </div>
    </>
  );
};

export default Searchbar;
