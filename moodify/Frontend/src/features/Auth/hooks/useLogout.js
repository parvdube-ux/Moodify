import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import { logout } from "../services/auth.api";

export default function useLogout() {

  const { setuser } =
    useContext(AuthContext);

  const logoutHandler =
    async () => {

      try {

        await logout();

        setuser(null);

        window.location.href =
          "/login";

      } catch(error) {

        console.error(error);

      }

    };

  return logoutHandler;
}