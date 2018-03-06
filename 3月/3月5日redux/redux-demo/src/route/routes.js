import React, { Component } from 'react'
import store from '../store.js'
import { Provider } from 'react-redux'
import Demo from '../component/demo.js'



const Root = () => (
    <Provider store={store}>
        <Demo />
    </Provider>
)

export default Root

