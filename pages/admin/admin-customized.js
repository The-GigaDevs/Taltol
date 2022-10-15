import AdminHeader from '../../components/admin/AdminHeader';
import AdminMainSort from '../../components/admin/AdminMainSort';
import AdminForm from '../../components/admin/AdminTopicsForm';
import AdminTopics from '../../components/admin/AdminTopics';
import { useRouter } from 'next/router';

const Admin = () => {
  const router = useRouter();

  return (
    <>
      <AdminHeader />
      <AdminTopics />
      <button style={{marginBottom: '50px'}} onClick={() => { router.push('/admin-customized-page') }}>Add Customized Page</button>
    </>
  );
};

export default Admin;
