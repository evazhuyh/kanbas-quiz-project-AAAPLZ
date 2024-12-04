import { Link , useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CoursesNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={`/Kanbas/Account/${link}`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? "active text-dark" : "text-danger"}` }>
        {link} </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
);}