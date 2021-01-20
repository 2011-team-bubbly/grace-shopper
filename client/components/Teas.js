import React, {useState, useEffect} from 'react'
import TeaCard from './TeaCard'
import Axios from 'axios'
import Pagination from './Pagination'

export const Teas = () => {
  const [teaDrinks, setTeaDrinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [teasPerPage] = useState(3)

  useEffect(() => {
    const fetchedTeas = async () => {
      setLoading(true)
      const {data} = await Axios.get('api/teas')
      setTeaDrinks(data)
      setLoading(false)
    }
    fetchedTeas()
  }, [])

  console.log('hello world', teaDrinks)
  if (loading) {
    return <h2> Loading...</h2>
  }

  const indexOfLastTea = currentPage * teasPerPage
  const indexOfFirstTea = indexOfLastTea - teasPerPage
  const currentTeas = teaDrinks.slice(indexOfFirstTea, indexOfLastTea)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <h1>All Teas</h1>
      <div className="all-teas">
        {currentTeas.length &&
          currentTeas.map(tea => <TeaCard key={tea.id} tea={tea} />)}
      </div>
      <Pagination
        teasPerPage={teasPerPage}
        totalTeas={teaDrinks.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Teas
