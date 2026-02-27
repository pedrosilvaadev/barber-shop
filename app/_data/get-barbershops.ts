"use server"

import { db } from "@/lib/prisma"

export interface BarberShopsProps {
  searchParams: {
    search?: string
  }
}

export const getBarberShops = async ({ searchParams }: BarberShopsProps) => {
  return await db.barbershop.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchParams?.search,
            mode: "insensitive",
          },
        },
        {
          services: {
            some: {
              name: {
                contains: searchParams?.search,
                mode: "insensitive",
              },
            },
          },
        },
      ],
    },
  })
}
