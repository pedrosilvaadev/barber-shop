"use server"

import { db } from "@/lib/prisma"

export interface BarberShopDetailProps {
  params: {
    id: string
  }
}

export const getBarberShopDetail = async ({
  params,
}: BarberShopDetailProps) => {
  return await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })
}
