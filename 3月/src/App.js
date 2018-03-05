import React, { Component } from 'react'
import { render } from 'react-dom'
import store from './index.js'
import { add_article , delete_article} from './action.js'

window.store = store
window.add_article = add_article
window.delete_article = delete_article

const App = () => (
    <div>
        this is app
    </div>
)

render(<App />,document.getElementById("root"))


