import { v4 as uuidv4 } from 'uuid'
import { Reservation } from '~/types/Reservation'

export default function({ $axios }: any, inject: any) {
  // Create a custom axios instance
  const apiAxios = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })
  // Set baseURL to something different
  apiAxios.setBaseURL('https://my_api.com')

  const reservations: Reservation[] = []

  const api = {
    addNewReservation: (reservation: Reservation) => {
      reservation.id = uuidv4()
      reservations.push(reservation)
      console.log(reservations)
    },
    getReservations: (): Reservation[] => {
      return reservations
    }
  }

  // Inject to context as $api
  inject('api', api)
}
