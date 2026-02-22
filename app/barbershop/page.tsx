import BarberShopItem from "@/components/barbershopitem"
import Header from "@/components/header"
import Search from "@/components/search"
import { db } from "@/lib/prisma"

interface BarbershopPageProps {
  searchParams: {
    search?: string
  }
}
const BarbershopsPage = async ({ searchParams }: BarbershopPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  })

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="text-bold mb-3 mt-6 text-xs uppercase text-gray-400">
          Resultados para: {searchParams?.search}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopsPage
