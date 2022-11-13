import { useEffect, useState } from 'react'
import InfoTable from '../../components/InfoTable'
import { GlobalStore } from '../../store/store'

type ResponseRow = {
  id: number
  name: string
  date_of_birth: string
  age: {
    years: number
    months: number
    days: number
  }
}

const updateLoadingStatus = (status: boolean) => {
  GlobalStore.update((state) => {
    state.isDataFetching = status
  })
}

function Home() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    updateLoadingStatus(true)
    fetch('https://age-tracker-api.herokuapp.com/people/all')
      .then((resp) => resp.json())
      .then((response) => {
        const rowList = response.map((i: ResponseRow) => ({
          name: i.name,
          dateOfBirth: new Date(i.date_of_birth).toLocaleDateString('en-GB'),
          age: `${i.age.years} Years ${i.age.months} Months ${i.age.days} Days`,
          id: i.id,
        }))
        setRows(rowList)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        updateLoadingStatus(false)
      })
  }, [setRows])

  return (
    <div className='home'>
      <InfoTable rows={rows} />
    </div>
  )
}

export default Home
