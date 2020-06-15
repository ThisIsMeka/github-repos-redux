import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { history } from '../redux'
import Head from './head'
import { updateUsername } from '../redux/reducers/repositories'

const Main = () => {
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.repositories.userName)

  return (
    <div>
      <Head title="Main" />
      <div className="main-bg flex justify-center items-center h-screen">
        <div className="bg-gray-800 text-white font-bold rounded-lg border shadow-lg py-10 px-16">
          <img
            className="mx-auto h-16 w-16 mb-4"
            src="https://github.githubassets.com/favicons/favicon-dark.svg"
            alt="Logo"
          />
          <h2 className="mt-6 mb-6 text-center text-3xl leading-9 font-extrabold text-white">
            GitHub repositories search
          </h2>
          <form>
            <input
              type="text"
              onChange={(e) => dispatch(updateUsername(e.target.value))}
              value={userName}
              onKeyPress={(ev) => {
                if (ev.key === 'Enter') {
                  history.push(`/${userName}`)
                }
              }}
              placeholder="Enter username"
              className="bg-white-700 appearance-none border-4 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-gray-600"
            />
            <Link
              to={`/${userName}`}
              className="bg-gray-700 hover:bg-gray-800 border-4 border-gray-200 text-white font-bold py-3 px-4 ml-6 rounded focus:outline-none focus:border-gray-600"
            >
              View Repositories
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Main
