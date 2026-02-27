import BarberShopItem from "@/components/barbershopitem"
import Header from "@/components/header"
import Search from "@/components/search"
import { BarberShopsProps, getBarberShops } from "../_data/get-barbershops"

const BarbershopsPage = async ({ searchParams }: BarberShopsProps) => {
  const barbershops = await getBarberShops({ searchParams })

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="my-6 px-5">
          <Search />
        </div>
        <div className="px-5">
          <h2 className="text-bold mb-3 mt-6 text-xs uppercase text-gray-400">
            Resultados para: {searchParams?.search}
          </h2>
          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {barbershops.map((barbershop) => (
              <BarberShopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarbershopsPage
