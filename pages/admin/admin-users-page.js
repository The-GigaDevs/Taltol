import { useEffect, useState } from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminUserHeader from '../../components/admin/AdminUserHeader';
import AdminUserLiked from '../../components/admin/AdminUserLiked';
import AdminUserSavedCollection from '../../components/admin/AdminUserSavedCollection';

import { useDispatch } from 'react-redux';
import { getCollectionsAction } from '../../slices/admin.slice';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [showCollection, setShowCollection] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionsAction());
  }, []);


  const handleTabLiked = () => {
    setActiveTab('tab1');
  };
  const handleTabCollection = () => {
    setActiveTab('tab2');
  };
  return (
    <>
      <AdminHeader />
      <AdminUserHeader
        handleTab1={handleTabLiked}
        handleTab2={handleTabCollection}
        activeTab={activeTab}
      />
      <div className="container">
        <AdminUserLiked activeTab={activeTab} />
        <AdminUserSavedCollection
          activeTab={activeTab}
          showCollection={showCollection}
          setShowCollection={setShowCollection}
        />
      </div>
    </>
  );
};

export default Admin;
