import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ContextData } from "./studentData";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// const emptyObj = {
//     name: "",
//     age: "",
//     course: "",
//     batch: "",
//     id: "",
// };

const Edit = () => {
  const [data, setData] = React.useContext(ContextData);
  const [details, setDetails] = React.useState({
    name: "",
    age: "",
    course: "",
    batch: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    data.forEach((item) => {
      if (item.id === id) {
        setDetails({
          name: item.name,
          age: item.age,
          course: item.course,
          batch: item.batch,
        });
      }
    });
  }, [data, id]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id === undefined) {
      let newData = {
        ...details,
        id: Math.floor(Math.random() * 100000).toString(),
      };
      setData([...data, newData]);
    } else {
      setData((previousState) =>
        previousState.map((student) =>
          student.id === id
            ? {
                id: id,
                name: details.name,
                age: details.age,
                course: details.course,
                batch: details.batch,
              }
            : student
        )
      );
    }
    navigate("/students");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div className="input-conatiner">
          <TextField
            required
            variant="outlined"
            label="Name"
            type="text"
            id="name"
            name="name"
            className="input"
            value={details.name}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            label="Age"
            type="number"
            id="age"
            name="age"
            className="input"
            value={details.age}
            onChange={handleChange}
          />
        </div>
        <div className="input-conatiner">
          <TextField
            required
            variant="outlined"
            label="Course"
            type="text"
            id="course"
            name="course"
            className="input"
            value={details.course}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            label="Batch"
            type="text"
            id="batch"
            name="batch"
            className="input"
            value={details.batch}
            onChange={handleChange}
          />
        </div>
        <div className="btn-container">
          {
            <Link to="/students">
              <button className="cancel-btn">Cancel</button>
            </Link>
          }

          <button type="submit" className="submit-btn">
            Update
          </button>
        </div>
      </form>
    </Box>
  );
};

export default Edit;
