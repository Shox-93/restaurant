import { GoPerson } from "react-icons/go"
import { Button } from "../components/button"
import { Container } from "../widgets/container"
import Logo from "./../assets/logo.svg"
import { Link } from "react-router"
import { RiShoppingCart2Line } from "react-icons/ri"

export const Header = () => {
    return <header
        className="pt-[44px] pb-[25px]"
    >
        <Container>
            <div className="flex items-center justify-between">
                <Link to={"/"} className="inline-block w-[100px]">
                    <img
                        src={Logo}
                        alt="Логотип"
                    />
                </Link>

                <div className="space-x-2">
                    <Button color="blue">
                        <GoPerson />

                        <span>
                            Войти
                        </span>
                    </Button>

                    <Button color="white">
                        <RiShoppingCart2Line />

                        <span>
                            Корзина
                        </span>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
}