import React, {useState, useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import TeaCard from './TeaCard'
import {removingTea} from '../store/TeasReducer'
import Axios from 'axios'
import Pagination from './Pagination'
import {fetchTeas} from '../store/TeasReducer'

export const Teas = ({teas}) => {
  const [teaDrinks, setTeaDrinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [teasPerPage] = useState(16)
  const allTeas = useSelector(state => state.teas.teas)
  // console.log('all teas', allTeas)

  useEffect(() => {
    getTeas()
  }, [])

  useEffect(
    () => {
      setLoading(true)
      setTeaDrinks(teas)
      setLoading(false)
    },
    [teas]
  )

  if (loading) {
    return <h2> Loading...</h2>
  }

  const indexOfLastTea = currentPage * teasPerPage
  const indexOfFirstTea = indexOfLastTea - teasPerPage
  const currentTeas = allTeas.slice(indexOfFirstTea, indexOfLastTea)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const dispatch = useDispatch()
  const deleteTea = id => {
    dispatch(removingTea(id))
  }
  const getTeas = () => {
    dispatch(fetchTeas())
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

const mapState = state => ({
  teas: state.teas.teas
})

export default connect(mapState)(Teas)
