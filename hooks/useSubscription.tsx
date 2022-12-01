// import { collection, DocumentData, onSnapshot } from 'firebase/firestore'
// import { useEffect, useState } from 'react'
// import { db } from '../firebase'
// import { Movie } from '../typings'

// function useList(uid: string | undefined) {
//   const [list, setList] = useState<DocumentData[] | Movie[]>([])

//   useEffect(() => {
//     if (!uid) return

//     return onSnapshot(
//       collection(db, 'customers', uid, 'myList'),
//       (snapshot) => {
//         setList(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }))
//         )
//       }
//     )
//   }, [db, uid])

//   return list
// }

// export default useList

import { useEffect, useState } from 'react'
import {
  onCurrentUserSubscriptionUpdate,
  Subscription,
} from '@stripe/firestore-stripe-payments'
import payments from '../lib/stripe'
import { User } from 'firebase/auth'

function useSubscription(user: User | null) {
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  useEffect(() => {
    if (!user) return

    onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
      setSubscription(
        snapshot.subscriptions.filter(
          (subscription) =>
            subscription.status === 'active' ||
            subscription.status === 'trialing'
        )[0]
      )
    })
  }, [user])

  return subscription
}

export default useSubscription