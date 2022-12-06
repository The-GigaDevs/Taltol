import { useState } from 'react';
import cameraIcon from '../../public/static/camera-author.svg';
import randomAuthor from '../../public/static/quote-card-author.svg';
import AdminDescriptionField from './AdminDescriptionField';

const AdminAuthorDescriptionAvatar = ({ state, setState }) => {
  const [image, setImage] = useState(null);
  return (
    <div className="admin-author-description-avatar">
      <AdminDescriptionField state={state} setState={setState} />
      <label htmlFor="author-profile-image" className="admin-avatar-upload">
        <img
          src={image ? image : randomAuthor.src}
          alt="Author Avatar"
          className="admin-avatar-upload-image"
        />
        <input
          type="file"
          accept='image/*'
          id="author-profile-image"
          onChange={e => {
            const file = e.target.files[0];
            setState( prevState => ({...prevState, ['image_path'] : file})); 
            const reader = new FileReader();
            reader.onloadend = () => {
              setImage(reader.result);
            };
            reader.readAsDataURL(file);
          }}
        />
        <img
          src={cameraIcon.src}
          alt="Camera"
          className="admin-avatar-upload-icon"
        />
      </label>
    </div>
  );
};

export default AdminAuthorDescriptionAvatar;
