import PhoneItem from "@/components/phone-item"
import ServiceItem from "@/components/service-item"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarberShopPageProps {
  params: {
    id: string
  }
}
const BarberShopPage = async ({ params }: BarberShopPageProps) => {
  const barberShop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barberShop) {
    return notFound()
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barberShop?.imageUrl}
          alt={barberShop?.name}
          fill
          className="object-cover"
        />
        <Button
          size="icon"
          variant={"secondary"}
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant={"secondary"}
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barberShop?.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barberShop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5.0 (497 avaliações)</p>
        </div>
      </div>

      <div>
        <div className="space-y-3 border-b border-solid p-5">
          <h2 className="text-xs font-bold uppercase text-gray-400">
            Sobre nós
          </h2>
          <p className="text-justify text-sm">{barberShop?.description}</p>
        </div>
      </div>

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-3">
          {barberShop?.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="space-y-3 p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Contato</h2>
        {barberShop?.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarberShopPage
