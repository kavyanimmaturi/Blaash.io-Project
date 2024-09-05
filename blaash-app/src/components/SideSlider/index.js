import "./index.css";

const SideSlider = () => {
     return (
        <div className="side-slider-container">
            <h1 className="heading">Thumbnail Title</h1>
            <input type="text" placeholder="Get Sporty in Style" className="input"/>
            <p className="text">Video Status</p>
            <input type="radio" name="status" id="statusActive" value="Active" checked className="status" />
          <label for="genderMale">Active</label>
          <input type="radio" name="status" id="statusInactive" value="Active" className="status ml-2"/>
          <label for="genderFemale">Inactive</label>
        </div>
     )
}
export default SideSlider