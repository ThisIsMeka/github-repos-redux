import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserData } from '../redux/reducers/repositories'

const Header = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const avatar = useSelector((s) => s.repositories.userData.avatar_url)
  useEffect(() => {
    dispatch(updateUserData(userName))
  }, [userName, dispatch])
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800">
      <div className="flex items-center text-white mr-10">
        {userName && (
          <img
            className="w-16 h-16 rounded mx-10 border-2 border-white hover:border-transparent "
            src={avatar}
            alt=""
          />
        )}
        <span className="text-xl text-white uppercase"> {userName} </span>
      </div>
      <div>
        {userName && (
          <Link
            className="text-sm px-4 py-2 leading-none mr-4 border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            to="/"
          >
            Main
          </Link>
        )}{' '}
        &nbsp;
        {repositoryName && (
          <Link
            className=" text-sm px-4 py-2 leading-none mr-4 border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            to={`/${userName}`}
          >
            Repositories
          </Link>
        )}
      </div>
    </nav>
  )
}
export default Header
