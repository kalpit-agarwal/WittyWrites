import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";
//we dont use "to" in nextjs, we use "href" instead
const Nav = () => {
  const [current, setCurrent] = useState("");

  //process.browser is used to check if the code is running on the client side and not server side
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const router = useRouter();
  const [state, setState] = useContext(UserContext);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <ul
      className="nav bg-dark d-flex  justify-content-end py-2 "
      style={{ gap: "80px" }}
    >
      <li className={`nav-item ${current === "/" && "active"}`}>
        <Link href="/" className="nav-link text-light logo">
          WittyWrites
        </Link>
      </li>
      {state !== null ? (
        <>
          <li
            className={`nav-item ${current === "/user/dashboard" && "active"}`}
          >
            <Link href="/user/dashboard" className={`nav-link text-light `}>
              {state && state.user && state.user.name}
            </Link>
          </li>
          <li className="nav-item">
            <a
              onClick={logout}
              className="nav-link text-light"
              style={{ cursor: "pointer" }}
            >
              Logout
            </a>
          </li>
        </>
      ) : (
        <>
          <li className={`nav-item ${current === "/login" && "active"}`}>
            <Link href="/login" className="nav-link text-light">
              Login
            </Link>
          </li>
          <li className={`nav-item ${current === "/register" && "active"}`}>
            <Link href="/register" className="nav-link text-light">
              Register
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Nav;
