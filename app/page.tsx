import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { db } from "@/lib/prisma"
import BarberShopItem from "@/components/barbershopitem"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Pedro!</h2>
        <p>Segunda-feira, 09 de fevereiro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />

          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant={"secondary"}>
            <Image
              src="icons/scissors.svg"
              alt="Tesoura"
              width={16}
              height={16}
            />
            Cabelo
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image
              src="icons/mustache.svg"
              alt="Creme de barba"
              width={16}
              height={16}
            />
            Barba
          </Button>
          <Button className="gap-2" variant={"secondary"}>
            <Image src="icons/razor.svg" alt="Tesoura" width={16} height={16} />
            Acabamento
          </Button>
          <Button className="gap-2" variant={"secondary"}>
            <Image
              src="icons/scissors.svg"
              alt="Tesoura"
              width={16}
              height={16}
            />
            Cabelo
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image
              src="icons/mustache.svg"
              alt="Creme de barba"
              width={16}
              height={16}
            />
            Barba
          </Button>
          <Button className="gap-2" variant={"secondary"}>
            <Image src="icons/razor.svg" alt="Tesoura" width={16} height={16} />
            Acabamento
          </Button>
        </div>

        <div className="relative mt-6 h-[180px] w-full">
          <Image
            src="/images/banner-01.svg"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="text-bold mb-3 mt-6 text-xs uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/images/avatar.jpg" alt="Pedro" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">09</p>
              <p className="text-sm">09:45</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-bold mb-3 mt-6 text-xs uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="text-bold mb-3 mt-6 text-xs uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
