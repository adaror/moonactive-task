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
} from '@material-ui/core';
import './promotions-table.style.scss';

class PromotionsTable extends React.Component {
  constructor(props) {
    super(props);

    this.getTableRows = this.getTableRows.bind(this);
  }

  getTableRows() {
    const rowsArr = [];
    for (let i = 0; i < this.props.values.length; i++) {
      rowsArr.push(
        <TableRow key={i}>
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
      <div
        className="promotion-table-container"
      >
        <TableContainer>
          <Table>
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
      </div>
    );
  }
}

PromotionsTable.defaultProps = {
  keys: PropTypes.array,
  values: PropTypes.array,
};

export default PromotionsTable;
