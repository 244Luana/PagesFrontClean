import { useState } from "react";
import { SHeader, Logo, Navigation, NavLink, SearchContainer, SearchInput, BooksIconContainer, AuthButton, LogoContainer } from "./styles";
import BooksIcon from "../../assets/BooksIcon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useBook } from "../../hooks/useBook";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const { searchBooks } = useBook();
    const { currentUser, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            const results = searchBooks(searchQuery);
            console.log("Resultados da busca:", results);
            navigate("/");
        }
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <SHeader>

            <Link to="/">
                <LogoContainer>
                    <BooksIconContainer>
                        <img src={BooksIcon} alt="Livros Logo" />
                    </BooksIconContainer>
                    <Logo>Pages & Pages</Logo>
                </LogoContainer>
            </Link>

            <Navigation>
                <NavLink
                    as={Link}
                    to="/"
                    $isActive={location.pathname === "/"}
                >
                    Página Inicial
                </NavLink>
                <NavLink
                    as={Link}
                    to="/reviews"
                    $isActive={location.pathname === "/reviews"}
                >
                    Reviews
                </NavLink>
                {currentUser && (
                    <NavLink
                        as={Link}
                        to="/perfil"
                        $isActive={location.pathname === "/perfil"}
                    >
                        Meu Perfil
                    </NavLink>
                )}
            </Navigation>

            <SearchContainer>
                <form onSubmit={handleSearch}>
                    <SearchInput
                        placeholder="Busque aqui um livro ou usuário"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>

            </SearchContainer>

            {currentUser ? (
                <AuthButton onClick={handleLogout}>Logout</AuthButton>
            ) : (
                <AuthButton as={Link} to="/login">Login</AuthButton>
            )}
        </SHeader>
    );
}


