import AdminDescriptionField from './AdminDescriptionField';
import randomAuthor from '../../public/static/quote-card-author.svg';
import cameraIcon from '../../public/static/camera-author.svg';

const AdminAuthorDescriptionAvatar = ({ state, setState }) => {
  return (
    <div className="admin-author-description-avatar">
      <AdminDescriptionField state={state} setState={setState} />
      <label htmlFor="author-profile-image" className="admin-avatar-upload">
        <img
          src={state.image_path ? state.image_path : randomAuthor.src}
          alt="Author Avatar"
          className="admin-avatar-upload-image"
        />
        <input
          type="file"
          id="author-profile-image"
          onChange={e => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              setState({ ...state, image_path: reader.result });
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
