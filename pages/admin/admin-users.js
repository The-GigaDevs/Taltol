import AdminHeader from '../../components/admin/AdminHeader';
import AdminUsers from '../../components/admin/AdminUsers';

const Admin = () => {
  return (
    <>
      <AdminHeader />
      <div className="container">
        <AdminUsers />
      </div>
    </>
  );
};

export default Admin;
