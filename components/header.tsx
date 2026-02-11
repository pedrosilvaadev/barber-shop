import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import SideBarButton from "./sidebar-button"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          src={"/images/logo.svg"}
          alt="FSW Barber"
          width={120}
          height={18}
        />

        <SideBarButton />
      </CardContent>
    </Card>
  )
}

export default Header
