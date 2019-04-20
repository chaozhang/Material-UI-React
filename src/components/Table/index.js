import React, {Component} from 'react'
import ReactTable from 'react-table'
import treeTableHOC from 'react-table/lib/hoc/treeTable'
import { LinearProgress } from '../'
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash-es'


const loading = () => {
    return <div className="-loading -active">
        <div className="-loading-inner">
            <div className='text'>Loading...</div>
            <LinearProgress color="primary" />
        </div>
    </div>;
}

class Table extends Component {
        

    constructor(props) {
        super(props)

        this.state = {
            mountTime: Date.now(),
            timer: null,
            timedOut: false
        }
    }

    componentDidMount() {
        if (this.props.timeOut) {
            const timeOutDuration = this.props.timeOut === true ? 60 * 1000 : this.props.timeOut
            this.setState({
                timer: setInterval(() => {
                    if (Date.now() - this.state.mountTime > timeOutDuration) {
                        clearInterval(this.state.timer)
                        this.setState({timedOut: true})
                    }

                    if (this.props.data && !isEmpty(this.props.data)) {
                        clearInterval(this.state.timer)
                    }
                }, 1000)
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }
    
    

    render() {
        const newProps = {...this.props}
        let TableComp = ReactTable;
        
        if(newProps.treeTable) {
                    TableComp = treeTableHOC(ReactTable);
        }

        if (this.state.timedOut) {
            newProps.loading = false
            newProps.NoDataComponent = newProps.TimeOutComponent || newProps.NoDataComponent
        } else if(newProps.loading) {
            newProps.noDataText = '';
            newProps.showPagination = false;
            newProps.LoadingComponent = loading;
            newProps.NoDataComponent= undefined
        }

        return (
            <TableComp {...newProps} />
        )
    }
}


// const Table = (props) => {
// 	let newProps = {...props};

// 	if(newProps.loading) {
// 		newProps.noDataText = '';
// 		newProps.showPagination = false;
//         newProps.LoadingComponent = loading;
//         newProps.NoDataComponent= undefined
// 	}

//     let TableComp = ReactTable;

//     if(newProps.treeTable) {
//         TableComp = treeTableHOC(ReactTable);
//     }

//     return (
//         <TableComp {...newProps} />
//     )
// }

Table.propTypes = {
    timeOut: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    TimeOutComponent: PropTypes.element,
    NoDataComponent: PropTypes.element
}

export default Table
