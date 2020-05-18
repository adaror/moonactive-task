import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PromotionsTable from './promotions-table/promotions-table.component';
import { insertPromotionDetails, setPage, insertTopPromotionDetails, cleanArray } from '../../store/actions/promotions.action';
import './promotion.style.scss';

class Promotions extends React.Component {
  prevScrollPosition = 0;

  onScroll = (ref) => {
    const currentPage = this.props.page;
    const newPage = currentPage + 10;

    if (this.prevScrollPosition < ref.scrollTop) {
      if (ref.scrollTop > ref.scrollHeight / 2) {
        this.props.insertPromotionDetails(newPage);
        this.props.setPage(newPage);
        ref.scrollTop = 0;
      }
    } else {
      if (ref.scrollTop < (ref.scrollHeight / 2) && currentPage > 10) {
        this.props.insertTopPromotionDetails(currentPage - 20);
        this.props.setPage(currentPage - 10);
        ref.scrollTop = ref.scrollHeight;
      }
    }
    this.prevScrollPosition = ref.scrollTop;
  }

  getTableKeys = () => {
    if (this.props.promotions.length > 0) {
      return Object.keys(this.props.promotions[0]);
    }
    return [];
  }

  render() {
    return (
      <div
        className="promotions-container"
      >
        <PromotionsTable
          keys={this.props.promotions.length > 0 ? Object.keys(this.props.promotions[0]) : []}
          values={this.props.promotions.length > 0 ? this.props.promotions : []}
          onTableScroll={this.onScroll}
        />
      </div>
    );
  }
}

Promotions.propTypes = {
  insertPromotionDetails: PropTypes.func,
  promotions: PropTypes.array,
  setPage: PropTypes.func,
  page: PropTypes.number,
  insertTopPromotionDetails: PropTypes.func,
  cleanArray: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  promotions: state.promotions,
  page: state.page,
});

const mapDispatchToProps = {
  insertPromotionDetails,
  setPage,
  insertTopPromotionDetails,
  cleanArray
};

export default connect(mapStateToProps, mapDispatchToProps)(Promotions);
