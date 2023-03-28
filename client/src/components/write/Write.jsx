import { AddCircleOutline } from "@mui/icons-material";
import "./write.css";

export default function Write(props) {
  return (
    <div className="write">
      <div className="blogcover">
        <img src="assets/fernando-hernandez-JdoofvUDUwc-unsplash.jpg" alt="" />
      </div>

      <form className="writeform">
        <div className="writeFormGroup">
          <div>
            <input type="file" id="fileInput" hidden />
          </div>
          <div className="title">
            <AddCircleOutline
              fontSize={"medium"}
              sx={{
                marginRight: "20px",
                display: "flex",
                fontWeight: "10px",
                color: "rgb(117, 117, 117)",
                fontSize: "40px",

                "&:hover": {
                  opacity: "0.7",
                },
              }}
            />
            <input type="text" id="title" placeholder="Title" />
          </div>
        </div>
        <div>
          <div className="item d-flex">
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
            />
            <input type="text" placeholder="Write your Story" />
          </div>
        </div>
      </form>
    </div>
  );
}
