import Markdown from 'markdown-to-jsx'
import React, { useEffect } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateReadme } from '../redux/reducers/repositories'
import './readme.scss'

const Readme = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const readme = useSelector((store) => store.repositories.readme)
  useEffect(() => {
    dispatch(updateReadme(userName, repositoryName))
  }, [userName, repositoryName, dispatch])
  return (
    <div>
      <div className="markdown-body">
        <Markdown>{readme}</Markdown>
      </div>
      {!readme.length && (
        <div className="flex justify-center items-center mt-40">
          <HashLoader className=" color-#4a5568" />
        </div>
      )}
    </div>
  )
}

Readme.propTypes = {}

export default Readme
