import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import SideBarButton from "./sidebar-button"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="container mx-auto flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image
            src={"/images/logo.svg"}
            alt="FSW Barber"
            width={120}
            height={18}
          />
        </Link>

        <SideBarButton />
      </CardContent>
    </Card>
  )
}

export default Header
