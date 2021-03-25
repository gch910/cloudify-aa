const NEW_UPLOAD = "upload/NEW_UPLOAD";

const upload = (song) => ({
  type: NEW_UPLOAD,
  song,
});

export const newUpload = (formFile, attributes) => async (dispatch) => {
  const res = await fetch("/api/songs/upload", {
    method: "POST",
    body: song_path,
  });
};
