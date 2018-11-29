import React from 'react'
import Base from './'
import { Table } from '../../../components/'
import treeTableData from '../treeTableData'


const buildCode = () => {
    return (
`import { Table } from "ZapWebCommon/lib/js/"

<Table
    data = {tableData}
    columns={columnsMetadata}
    pivotBy={["state", "post", "city"]}
    treeTable={true}
    loading={true | false}
/>

More details: https://react-table.js.org/#/story/tree-table-hoc`
    )
}

const buildDemo = (loading) => {
    return (
        <Table
          data = {loading ? [] : treeTableData}
          loading={loading}
          treeTable={true}
          pivotBy={["state", "post", "city"]}
          columns={[
            // we only require the accessor so TreeTable
            // can handle the pivot automatically
            {
              accessor: "state"
            },
            {
              accessor: "post"
            },
            {
              accessor: "city"
            },

            // any other columns we want to display
            {
              Header: "First Name",
              accessor: "first_name"
            },
            {
              Header: "Last Name",
              accessor: "last_name"
            },
            {
              Header: "Company Name",
              accessor: "company_name"
            },
            {
              Header: "Address",
              accessor: "address"
            },
            {
              Header: "Phone 1",
              accessor: "phone1"
            },
            {
              Header: "Email",
              accessor: "email"
            }
          ]}
          defaultPageSize={10}
          sortable={false}
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