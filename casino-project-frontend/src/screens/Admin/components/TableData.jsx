import Table from "../../../components/Table/Table";


export const TableData = ({data, name}) => {

    const getTableValues = () => {
        const values = []
        data.forEach(doc => values.push(Object.values(doc)))
        return values
    }

    const getTableColumns = () => {
        const columns = []
        Object.keys(data[0]).forEach(column => columns.push(capitalize(column)))
        return columns
    }

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <div>
            <Table heading={data.length === 0 ? [] : getTableColumns()}
                   body={data.length === 0 ? [] : getTableValues()}
                   name={name}/>,
        </div>
    );
}