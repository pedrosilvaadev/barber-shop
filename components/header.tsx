import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "@/app/_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

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

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="overflow-auto [&::-webkit-scrollbar]:hidden">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b border-solid p-5">
              <Avatar>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Pedro"
                />
              </Avatar>
              <div>
                <p className="font-bold">Pedro Silva</p>
                <p className="text-xs">pedro@teste.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-b border-solid py-5">
              <SheetClose asChild>
                <Button
                  className="justify-start gap-1"
                  asChild
                  variant={"ghost"}
                >
                  <Link href="/">
                    <HomeIcon size={18} />
                    Inicio
                  </Link>
                </Button>
              </SheetClose>
              <Button className="justify-start gap-1" variant={"ghost"}>
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>

            <div className="flex flex-col gap-4 border-b border-solid py-5">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="justify-start gap-1"
                  variant={"ghost"}
                >
                  <Image
                    src={option.imageUrl}
                    alt={option.title}
                    width={18}
                    height={18}
                  />
                  {option.title}
                </Button>
              ))}
            </div>

            <Button className="mt-5 justify-start gap-2" variant={"ghost"}>
              <LogOutIcon size={18} />
              Sair da conta
            </Button>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
