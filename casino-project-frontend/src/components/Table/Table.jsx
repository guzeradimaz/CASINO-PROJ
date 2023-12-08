import {Component} from "react";
import './Table.css'

class Table extends Component {
    render() {
        let heading = this.props.heading;
        let body = this.props.body;
        let name = this.props.name
        if (!heading || !body) {
            return null
        }
        return (
            <>
                <div className="caption">{name}</div>
                <table className="table">
                    <thead>
                    <tr>
                        {heading.map((head, headID) => (
                            <th key={headID}>{head}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {body.map((rowContent, rowID) => (
                        <TableRow
                            rowContent={rowContent}
                            key={rowID}
                        />
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}

class TableRow extends Component {
    render() {
        let row = this.props.rowContent;
        return (
            <tr>
                {row.map((val, rowID) => (
                    <td key={rowID}>{val}</td>
                ))}
            </tr>
        );
    }
}

export default Table