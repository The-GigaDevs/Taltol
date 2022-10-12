import { useRouter } from "next/router";


const AdminGoBack = () => {
  const router = useRouter();
  return (
    <div className="admin-go-back">
      <div className="container">
        <button className="admin-go-back-btn" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M10 1.88L3.81916 8L10 14.12L8.09717 16L0 8L8.09717 0L10 1.88Z"
              fill="#333333"
            ></path>
          </svg>
          <span className="admin-go-back-btn-text">Go back</span>
        </button>
      </div>
    </div>
  );
};

export default AdminGoBack;
