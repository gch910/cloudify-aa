import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UploadForm = () => {
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="audio/*" onChange={updateImage} />
      <button type="submit">Submit</button>
      {imageLoading && <p>Loading...</p>}
    </form>
  );
};

export default UploadForm;
