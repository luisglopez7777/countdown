import React, { useEffect, useState } from 'react'
import intervalToDuration from 'date-fns/intervalToDuration'
import differenceInDays from 'date-fns/differenceInDays'

const Countdown = () => {

  const thisYear = new Date().getFullYear()
  const birthdayThisYear = new Date(thisYear, 11, 24, 0, 0)
  const birthdayNextYear = new Date(thisYear + 1, 11, 24, 0, 0)

  const [answer, setAnswer] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date()

      const daysDifference = differenceInDays(
        today,
        birthdayThisYear
      )

      if (daysDifference <= 0) {
        const result = intervalToDuration({
          start: today,
          end: birthdayThisYear
        })
        console.log('result primer if', result)
        setAnswer(result)
      } else {
        const result = intervalToDuration({
          start: today,
          end: birthdayNextYear
        })
        console.log('segundo result', result)
        setAnswer(result)
      }

    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      {Object.keys(answer).length === 0 && answer.constructor === Object
        ?
        <p>Loading...</p>
        :
        answer.days === 0 && answer.months === 0
          ?
          <p>Happy birthday Eric!</p>
          :
          <p>{answer.months} months, {answer.days} days, {answer.minutes} minutes, {answer.seconds} seconds</p>
      }
    </main>
  )
}

export default Countdown