import React from 'react'
import Base from './'
import { Table } from '../../../components/'
import { makeTableData } from '../data'


const buildCode = () => {
    return (
`import { Table } from "ZapWebCommon/lib/js/"

<Table
    data = {tableData}
    columns={columnsMetadata}
/>

More details: https://react-table.js.org/#/story/readme`
    )
}

const buildDemo = (loading) => {
    return (
        <Table
          data = {loading ? [] : makeTableData()}
          loading={loading}
          columns={[
              {
                  Header: "First Name",
                  accessor: "firstName"
              },
              {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
              },
              {
                  Header: "Surgical Progress",
                  accessor: "progress",
                  minWidth: 200,
                  Cell: row => (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#dadada',
                        borderRadius: '2px'
                      }}
                    >
                      <div
                        style={{
                          width: `${row.value}%`,
                          height: '100%',
                          backgroundColor: row.value > 80 ? '#85cc00'
                            : row.value > 33 ? '#ffbf00'
                            : '#ff2e00',
                          borderRadius: '2px',
                          transition: 'all .2s ease-out'
                        }}
                      />
                    </div>
                  )
              },
              {
                  Header: "Status",
                  accessor: "status",
                  minWidth: 150,
                  Cell: row => (
                    <span>
                      <span style={{
                        color: row.value === 'Started' ? '#ff2e00'
                          : row.value === 'In Progress' ? '#ffbf00'
                          : '#57d500',
                        transition: 'all .3s ease'
                      }}>
                        &#x25cf;
                      </span> {
                        row.value === 'Completed' ? 'Completed'
                        : row.value === 'In Progress' ? `In Progress`
                        : 'Started'
                      }
                    </span>
                  )
              }
          ]}
          defaultPageSize={10}
        />
    )
}


class example extends Base {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 0,
            loading: true
        };
    }

    componentDidMount() {
      setTimeout(
        () => {
          this.setState({
            loading: false
          });
        },
        500
      );
    }

    render() {
        return this.buildContent(
            'table',
            buildDemo(this.state.loading),
            buildCode()
        );
    }
}


export default example