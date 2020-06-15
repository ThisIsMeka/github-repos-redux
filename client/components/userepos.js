import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import HashLoader from 'react-spinners/HashLoader'
import { searchRepository, updateRepositories } from '../redux/reducers/repositories'
import Head from './head'

const RepoList = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const list = useSelector((store) => store.repositories.list)
  const search = useSelector((store) => store.repositories.search)

  const filteredList = list.filter((el) => el.name.toLowerCase().includes(search))

  useEffect(() => {
    dispatch(updateRepositories(userName, repositoryName))
  }, [userName, repositoryName, dispatch])

  return (
    <div>
      <Head title="Repositories" />
      <div className="max-w-xl pt-10 mx-auto mb-12 border-b border-b-2 border-gray-800 py-2">
        <input
          type="text"
          placeholder="  Search... "
          onChange={(e) => dispatch(searchRepository(e.target.value))}
          className="appearance-none bg-transparent border-b opacity-75 text-gray-700 border-gray-200 bg-grey-50 w-full focus:outline-none text-black mr-3 ry-1"
        />
      </div>
      <div>
        <table className="mx-auto">
          <thead>
            <tr className="px-4 py-4 border-b border-gray-300 bg-gray-300">
              <th className="px-5 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-3 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Deployment
              </th>
              <th className="px-3 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Last Commit
              </th>
              <th className="px-3 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Readme
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((el) => (
              <tr>
                <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">{el.name}</td>
                <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                  <a
                    className={`${
                      el.homepage ? 'text-green-500' : 'text-red-500'
                    } px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
                    href={el.homepage ? el.homepage : undefined}
                  >
                    Go
                  </a>
                </td>
                <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                  {new Date(el.updated_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <Link to={`/${userName}/${el.name}`}>View Readme</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!list.length && (
        <div className="flex justify-center items-center mt-40">
          <HashLoader className=" color-#4a5568" />
        </div>
      )}
    </div>
  )
}

RepoList.propTypes = {}
export default RepoList
