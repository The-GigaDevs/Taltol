import AdminHeader from "../../components/admin/AdminHeader";
import AdminMainSort from "../../components/admin/AdminMainSort";
import AdminTags from "../../components/admin/AdminTags";
import { useRouter } from "next/router";
const Admin = () => {
    const router = useRouter();
    return (
        <>
        <AdminHeader />
        <AdminTags />
        <button className="btn btn-primary" onClick={() => router.push('/admin-tags-page')}>Add Tag</button>
        </>
    );
    }

export default Admin;