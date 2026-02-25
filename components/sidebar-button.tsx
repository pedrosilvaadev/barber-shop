"use client"
import { quickSearchOptions } from "@/app/_constants/search"
import {
  MenuIcon,
  HomeIcon,
  CalendarIcon,
  LogOutIcon,
  LogInIcon,
} from "lucide-react"
import { Button } from "./ui/button"
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  Sheet,
} from "./ui/sheet"
import Image from "next/image"
import Link from "next/link"

import { signOut, useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import SignInDialog from "./sign-in-dialog"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

const SideBarButton = () => {
  const { data: session } = useSession()
  const handleLogout = () => signOut()

  return (
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

        <div className="flex items-center justify-between gap-3 border-b border-solid p-5">
          {session?.user ? (
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={session?.user.image || ""}
                  alt="User Avatar"
                />
                <AvatarFallback>
                  {session.user.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">{session.user.name}</p>
                <p className="text-xs">{session.user.email}</p>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-bold">Olá faça seu login</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon">
                    <LogInIcon />
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-[90%]">
                  <SignInDialog />
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-1" asChild variant={"ghost"}>
              <Link href="/">
                <HomeIcon size={18} />
                Inicio
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-1" variant={"ghost"} asChild>
            <Link href="/bookings">
              <CalendarIcon size={18} />
              Agendamentos
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-4 border-b border-solid py-5">
          {quickSearchOptions.map((option) => (
            <SheetClose key={option.title} asChild>
              <Button className="justify-start gap-1" variant={"ghost"} asChild>
                <Link
                  href={`/barbershop?search=${option.title.toLocaleLowerCase()}`}
                >
                  <Image
                    src={option.imageUrl}
                    alt={option.title}
                    width={18}
                    height={18}
                  />
                  {option.title}
                </Link>
              </Button>
            </SheetClose>
          ))}
        </div>

        {session?.user && (
          <Button
            className="mt-5 justify-start gap-2"
            variant={"ghost"}
            onClick={handleLogout}
          >
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default SideBarButton
