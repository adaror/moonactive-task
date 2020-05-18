import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PromotionsTable from './promotions-table/promotions-table.component';
import PromotionOptions from './promotions-options/promotion-options.component';
import { insertPromotionDetails, setPage, insertTopPromotionDetails, cleanArray } from '../../store/actions/promotions.action';
import { insertPromotionToList, removePromotionToList } from '../../store/actions/selected-promotions.action';
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

  togglePromotionsInList = (evt, promotion) => {
    if (evt.target.checked) {
      this.props.insertPromotionToList(promotion);
    } else {
      this.props.removePromotionToList(promotion.id)
    }
  }

  render() {
    return (
      <div
        className="promotions-container"
      >
        <PromotionOptions />
        <PromotionsTable
          keys={this.props.promotions.length > 0 ? Object.keys(this.props.promotions[0]) : []}
          values={this.props.promotions.length > 0 ? this.props.promotions : []}
          onTableScroll={this.onScroll}
          togglePromotionsInList={this.togglePromotionsInList}
          selectedPromotions={this.props.selectedPromotions}
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
  insertPromotionToList: PropTypes.func,
  removePromotionToList: PropTypes.func,
  selectedPromotions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  promotions: state.promotions,
  page: state.page,
  selectedPromotions: state.selectedPromotions
});

const mapDispatchToProps = {
  insertPromotionDetails,
  setPage,
  insertTopPromotionDetails,
  cleanArray,
  insertPromotionToList,
  removePromotionToList
};

export default connect(mapStateToProps, mapDispatchToProps)(Promotions);
