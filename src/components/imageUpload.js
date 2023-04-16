import { useRef, useState } from "react";
import axios from "axios";
const cloudname = 'dq95ueewn'
const preset = "preset1"
const backendurl = `${process.env.REACT_APP_BACKEND_URL}/uploadimage`;
export default function ImageUploader({ defaultImage,setData,data }) {
  const fileSelect = useRef(null);
  const [image, setImage] = useState(defaultImage);
  const [progress, setProgress] = useState(0);

  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click();
    }
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      uploadFile(files[i]);
    }
  }

  async function uploadFile(file) {
    const url = `https://api.cloudinary.com/v1_1/${cloudname}/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", (e) => {
      setProgress(Math.round((e.loaded * 100.0) / e.total));
      console.log(Math.round((e.loaded * 100.0) / e.total));
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);

        setImage(response.secure_url);
        console.log(response.secure_url);
        setData(prev=>({...prev,image_url:response.secure_url}));
      }
    };

    fd.append(
      "upload_preset",
      preset
    );
    fd.append("tags", "browser_upload");
    fd.append("file", file);
    const resp = await xhr.send(fd);
    // console.log({resp});
    // const ress = await axios.post()
  }

  return (
    <>
      {image ? (
        <img
          className="object-contain rounded-lg"
          src={image.replace("upload/", "upload/w_600/")}
          style={{ height: 400, width: 600 }}
        />
      ) : (
        <div
          className="bg-gray-300  shadow-lg mx-auto mt-5 rounded-lg"
          style={{ height: 300, width: 500 }}
        >
          <form className="flex justify-center items-center h-full">
            {progress === 0 ? (
              <div className="text-gray-700 text-center">
                <button
                  className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto"
                  onClick={handleImageUpload}
                  type="button"
                >
                  Browse
                </button>
              </div>
            ) : (
              <span className="text-gray-700">{progress}%</span>
            )}

            <input
              ref={fileSelect}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleFiles(e.target.files)}
            />
          </form>
        </div>
      )}
    </>
  );
}