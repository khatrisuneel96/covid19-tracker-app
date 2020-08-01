import React, { useState, useEffect } from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../Api'

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI()
    }, [setFetchedCountries])


    return (
        <div className={styles.formControl}>
            <FormControl>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                    <option value="">Global</option>
                    {fetchedCountries.map((country, ind) => <option value={country} key={ind}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
