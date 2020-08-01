import React, { Component } from 'react'

import { Cards, CountryPicker, Chart } from './components'
import {fetchData} from './components/Api'

import styles from './App.module.css';


export class App extends Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }
  render() {
    const data = this.state.data
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App
