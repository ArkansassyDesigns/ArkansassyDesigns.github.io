import React from 'react'
import Router from 'react-router'

class Navigation extends React.Component {
    getRef(ref) {
        this.productNameRef = ref
    }

    handleSubmit() {
        const productName = this.productNameRef.value
        this.productNameRef.value = ''
        this.props.history.pushState(null, `/product/${productName}`)
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#basic-nav">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Arkansassy Designs</a>
                    </div>
                    <div className="collapse navbar-collapse" id="basic-nav">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Products <span className="sr-only">(current)</span></a></li>
                        </ul>
                        <form className="navbar-form navbar-right" role="search" onSubmit={() => this.handleSubmit()}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" style={{marginRight: 10}} ref={(ref) => this.getRef(ref)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Search Products</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

Navigation.PropTypes = {
    history: React.PropTypes.object.isRequired
}

export default Navigation
