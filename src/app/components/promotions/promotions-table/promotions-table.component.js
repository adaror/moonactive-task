import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper
} from '@material-ui/core';
import './promotions-table.style.scss';

class PromotionsTable extends React.Component {
  ref = React.createRef();
  constructor(props) {
    super(props);

    this.getTableRows = this.getTableRows.bind(this);
  }

  getTableRows() {
    const rowsArr = [];
    for (let i = 0; i < this.props.values.length; i++) {
      rowsArr.push(
        <TableRow key={this.props.values[i].id}>
          {
              Object.values(this.props.values[i]).map(
                (value, index) => <TableCell key={index}>{value}</TableCell>,
              )
        }
        </TableRow>,
      );
    }
    return rowsArr;
  }

  render() {
    return (
        <Paper>
          <TableContainer 
          ref={this.ref}
          onScroll={() => this.props.onTableScroll(this.ref.current)}
          style={{maxHeight: 428}}
          >
            <Table 
            stickyHeader
            aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {
                      this.props.keys.length > 0
                        ? this.props.keys.map((key) => <TableCell key={key}>{key}</TableCell>)
                        : null
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {
                        this.props.values.length > 0
                          ? this.getTableRows()
                          : null
                      }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
    );
  }
}

PromotionsTable.defaultProps = {
  keys: PropTypes.array,
  values: PropTypes.array,
  onTableScroll: PropTypes.func
};

export default PromotionsTable;
