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

  getTableRows = () => {
    return this.props.values.map((value) => (         
      <TableRow key={value.id}> 
        <TableCell padding="checkbox">
          <Checkbox 
            checked={!!this.props.selectedPromotions[value.id]}
            onClick={(e) => {this.props.togglePromotionsInList(e, value)}} 
          />
        </TableCell>
        {
        Object.values(value).map(
          (param, index) => <TableCell key={index}>{param}</TableCell>,
        )
        }
    </TableRow>
    ));
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
                <TableCell padding="checkbox" />
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

PromotionsTable.propTypes = {
  keys: PropTypes.array,
  values: PropTypes.array,
  onTableScroll: PropTypes.func,
  togglePromotionsInList: PropTypes.func,
  selectedPromotions: PropTypes.object
};

export default PromotionsTable;
