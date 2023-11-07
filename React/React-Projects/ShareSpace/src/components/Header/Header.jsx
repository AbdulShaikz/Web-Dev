import { Link, useNavigate } from "react-router-dom";
import { Container, Logo } from "../index.js";

function Header() {
  // const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: true,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: true,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: true,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: true,
    },
  ];

  return (
    <header className="py-3 shadow-md shadow-white bg-[#193d4e]">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="80px" />
            </Link>
          </div>
          <ul className="flex ml-auto md:gap-2 ">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="flex justify-center items-center">
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-300 hover:bg-[#00cee6] rounded-3xl hover:text-black"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;