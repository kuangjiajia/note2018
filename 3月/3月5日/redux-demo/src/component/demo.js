import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_article  } from '../action.js'
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { article } = this.props
        return (  
            <div>
                {
                    article.map((item,index) => {
                        return <span key={index}>{item.name}</span>
                    })
                }
                <button onClick={this.props.addArticle}>点击改变</button>
            </div>
        )
    }
}

const mapStateToProps = (state,action) => {
    return {
        article: state.article
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(add_article('kjj'))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Demo)