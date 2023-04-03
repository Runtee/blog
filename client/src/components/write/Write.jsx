import { AddAPhoto, AddCircleOutline } from "@mui/icons-material";
import "./write.css";

import React, { useState } from "react";

export default function Write(props) {
  const [title, setTitle] = useState("");
  const [bodies, setBodies] = useState([""]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleBodyChange = (index, event) => {
    const updatedBodies = [...bodies];
    updatedBodies[index] = event.target.value;
    setBodies(updatedBodies);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  const handleAddBody = () => {
    const updatedBodies = [...bodies, ""];
    setBodies(updatedBodies);
  };

  const handleRemoveBody = (index) => {
    const updatedBodies = [...bodies];
    updatedBodies.splice(index, 1);
    setBodies(updatedBodies);
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && bodies[index] === "") {
      handleRemoveBody(index);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="write">
      <form className="writeform" onSubmit={handleSubmit}>
      <div className="blogcover" style={{}}>
        {selectedFile ? (
          <img src={URL.createObjectURL(selectedFile)} alt="" />
        ) : ""}
        <AddAPhoto
            sx={{
              fontWeight: "10px",
              color: "rgb(117, 117, 117)",
              fontSize: "30px",
              top:"50%",
              left: "50%",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              zIndex: "3",
              "&:hover": {
                opacity: "0.7",
              },
            }}
            onClick={() => {
              document.getElementById("fileInput").click();
            }}
          />
        <input type="file" id="fileInput" hidden onChange={handleFileChange} />
      </div>
        <div className="writeFormGroup">
          <div className="title">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Title"
            />
          </div>
        </div>
        <div>
          {bodies.map((body, index) => (
            <div className="item d-flex" key={index}>
              <textarea
                id={`body${index}`}
                name={`body${index}`}
                value={body}
                placeholder="Write your Story"
                onChange={(event) => handleBodyChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
              />
            </div>
          ))}

          <AddCircleOutline
            fontSize={"medium"}
            sx={{
              marginRight: "20px",
              display: "flex",
              fontWeight: "10px",
              color: "rgb(117, 117, 117)",
              fontSize: "40px",
              transition: "all 0.5s ease",

              "&:hover": {
                opacity: "0.7",
                transform: "rotate(45deg)",
              },
            }}
            onClick={handleAddBody}
          />
        </div>
      </form>
    </div>
  );
}
