import AdminHeader from '../components/admin/AdminHeader';
import AdminMainSort from '../components/admin/AdminMainSort';
import AdminForm from '../components/admin/AdminForm';
import AdminTopics from '../components/admin/AdminTopics';
import { useRouter } from 'next/router';

const Admin = () => {
  const router = useRouter();

  return (
    <>
      <AdminHeader />
      <AdminTopics />
      <button onClick={() => { router.push('/admin-topics-page') }}>Add Topic</button>
    </>
  );
};

export default Admin;
