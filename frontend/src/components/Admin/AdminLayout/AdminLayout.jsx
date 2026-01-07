import { useEffect, useState } from "react";
import SideBarAdmin from "../AdminComponents/AdminSideBar/SideBarAdmin";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useStore } from "../../../store";
import { encryptEmail } from "../../../utils/Firebase/fireBaseEncryptEmail";
import { getProfilePhotoUrl } from "../../../utils/Firebase/firebaseFunctions";
import { isValidUrl } from "../../../utils/validationFunc";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  // Getting the userToken from cookies
  const userToken = cookies.userToken;
  const userDetail = user || localStorage.getItem("userprofile");
  const isDiretedFromLogout = useStore((state) => state.isDiretedFromLogout);
  useEffect(() => {
    if (!userToken && !isDiretedFromLogout) {
      navigate("/login");
      removeCookie("userToken", { path: "/" });
      removeCookie("access_token", { path: "/" });
      localStorage.clear();
      toast("Session expired. Please log in again !", {
        icon: "⌛",
        style: {
          background: "#fff",
          color: "black",
          fontSize: "14px",
        },
      });
    }
  }, [userToken]);

  //user
  useEffect(() => {
    async function getUserPhoto() {
      if (userDetail) {
        const ggmail = encryptEmail(userDetail?.email);
        const userPhoto = await getProfilePhotoUrl(ggmail);
        if (isValidUrl(userPhoto)) {
          const newUser = { ...userDetail, photo: userPhoto };
          setUser(newUser);
          localStorage.setItem("userprofile", JSON.stringify(newUser));
        }
        // navigate(from);
      }
    }
    getUserPhoto();
  }, [userDetail]);
  return (
    <main className="grid h-screen grid-cols-1 bg-[#F6F7FB] lg:grid-cols-[280px_1fr]">
      <SideBarAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="h-full w-full overflow-hidden">
        <Outlet context={[sidebarOpen, setSidebarOpen]} />
      </div>
    </main>
  );
}

export default AdminLayout;
