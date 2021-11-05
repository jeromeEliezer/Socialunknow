import { useState } from "react";

const UploadImg = () => {
const [file, setFile] = useState();

 const dispatch = useDispatch();
 const userData = useSelector((state) => state.userReducer);


    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', userData.pseudo);
        data.append('userId', userData._id);
        data.append('file', file);

        dispatch(uploadPicture(data, userData._id));
    };

    return (
       <form className="upload-pic" action="" onSubmit={handlePicture}>
           <label htmlFor="file">Changer d'image</label>
           <input type="file" id="file" accept=".jpeg, .jpg, .png"
           onChange={(e) => setFile(e.target.files[0])}
           />
           <br />
           <input type="submit" value="Envoyer" />
       </form>
    )
}

export default UploadImg