import BookingItem from "@/components/booking-item"
import Header from "@/components/header"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { notFound } from "next/navigation"
import { getConfirmedBookings } from "../_data/get-confirmed-bookings"
import { getConcludeBookings } from "../_data/get-conclude-bookings"

const BookingsPage = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return notFound()
  }

  const confirmedBookings = await getConfirmedBookings()
  const concludedBookings = await getConcludeBookings()

  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <div>
          <h1 className="text-xl font-bold">Agendamentos</h1>
          <p className="text-sm text-gray-400">
            Aqui estão os seus agendamentos futuros e passados.
          </p>
        </div>

        {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
          <p className="text-center text-sm font-semibold text-gray-400">
            Nenhum agendamento encontrado.
          </p>
        )}

        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Agendamentos Confirmados
            </h2>
            {confirmedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}

        {concludedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Agendamentos Concluídos
            </h2>
            {concludedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default BookingsPage
