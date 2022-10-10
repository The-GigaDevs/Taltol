import AdminHeader from "../components/admin/AdminHeader";
import AdminMainSort from "../components/admin/AdminMainSort";
import AdminAuthors from "../components/admin/AdminAuthors";
//import useRoouter from 'next/router';
import { useRouter } from "next/router";


const admin = () => {
    const router = useRouter();

    return (
        <>
        <AdminHeader />
        <AdminAuthors />

        <button className="btn btn-primary" onClick={() => router.push('/admin-author-page')}>Add Author</button>
        </>
    );
    }

export default admin;