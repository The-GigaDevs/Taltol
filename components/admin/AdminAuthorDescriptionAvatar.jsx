import AdminDescriptionField from './AdminDescriptionField';
import randomAuthor from '../../public/static/quote-card-author.jpg';
import cameraIcon from '../../public/static/camera-author.svg';

const AdminAuthorDescriptionAvatar = () => {
  return (
    <div className="admin-author-description-avatar">
      <AdminDescriptionField />
      <label htmlFor="author-profile-image" className="admin-avatar-upload">
        <img
          src={randomAuthor.src}
          alt="Author Avatar"
          className="admin-avatar-upload-image"
        />
        <input type="file" id="author-profile-image" />
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
