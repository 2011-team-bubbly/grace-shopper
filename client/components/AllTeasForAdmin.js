import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import TeaCard from './TeaCard'
import {removingTea} from '../store/TeasReducer'
import Axios from 'axios'
import Pagination from './Pagination'

export const Teas = () => {
  const [teaDrinks, setTeaDrinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [teasPerPage] = useState(16)

  useEffect(() => {
    const fetchedTeas = async () => {
      setLoading(true)
      const {data} = await Axios.get('api/teas')
      setTeaDrinks(data)
      setLoading(false)
    }
    fetchedTeas()
  }, [])

  if (loading) {
    return <h2> Loading...</h2>
  }

  const indexOfLastTea = currentPage * teasPerPage
  const indexOfFirstTea = indexOfLastTea - teasPerPage
  const currentTeas = teaDrinks.slice(indexOfFirstTea, indexOfLastTea)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const dispatch = useDispatch()
  const deleteTea = id => {
    dispatch(removingTea(id))
  }

  return (
    <div>
      <h3>Delete Teas</h3>
      <div className="allTeasContainer">
        <div className="all-teas">
          {currentTeas.length &&
            currentTeas.map(tea => {
              return (
                <div key={tea.id}>
                  <button
                    type="button"
                    onClick={() => deleteTea(tea.id)}
                    className="deleteX"
                  >
                    Delete
                  </button>
                  <TeaCard tea={tea} />
                </div>
              )
            })}
        </div>

        <Pagination
          teasPerPage={teasPerPage}
          totalTeas={teaDrinks.length}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default Teas
