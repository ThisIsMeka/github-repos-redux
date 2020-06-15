import React from 'react'
import { Route } from 'react-router-dom'
import Main from './main'
import RepoList from './userepos'
import Readme from './readme'
import Footer from './footer'
import Header from './headers'

const Home = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={() => <Main />} />
      <div className="container page-wrap mx-auto pt-16">
        <Route exact path="/:userName" component={() => <RepoList />} />
        <Route exact path="/:userName/:repositoryName" component={() => <Readme />} />
      </div>
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default Home
