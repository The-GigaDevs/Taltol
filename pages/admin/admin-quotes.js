import { useState } from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminMainSort from '../../components/admin/AdminMainSort';
import AdminQuotes from '../../components/admin/AdminQuotes';

const Admin = () => {
  const [picked, setIsPicked] = useState(false);

  return (
    <>
      <AdminHeader picked={picked} />
      <AdminMainSort />
      <AdminQuotes picked={picked} setIsPicked={setIsPicked} />
    </>
  );
};

export default Admin;
