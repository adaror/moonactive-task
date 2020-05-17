import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PromotionsTable from './promotions-table/promotions-table.component';
import { insertPromotionDetails, setPage, insertTopPromotionDetails, cleanArray } from '../../store/actions/promotions.action';
import './promotion.style.scss';

class Promotions extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.getTableKeys = this.getTableKeys.bind(this);
  }

  componentDidMount() {
    this.refs.promotionScroll.addEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const currentPage = this.props.page;
    const newPage = currentPage + 10;

    if (this.refs.promotionScroll.scrollTop + this.refs.promotionScroll.clientHeight >= this.refs.promotionScroll.scrollHeight) {
      this.props.insertPromotionDetails(newPage);
      this.props.setPage(newPage); 
    } 
    else if (this.refs.promotionScroll.scrollTop <= 100 && this.refs.promotionScroll.scrollTop >= 0 && currentPage >=10) {
      this.props.setPage(currentPage - 10); 
      this.props.insertTopPromotionDetails(currentPage - 10);
    } else if (currentPage === 0) {
      this.props.cleanArray();
    } 
  }
  getTableKeys() {
    if (this.props.promotions.length > 0) {
      return Object.keys(this.props.promotions[0]);
    }
    return [];
  }

  render() {
    return (
      <div
        className="promotions-container"
        ref="promotionScroll"
      >
        <PromotionsTable
          keys={this.props.promotions.length > 0 ? Object.keys(this.props.promotions[0]) : []}
          values={this.props.promotions.length > 0 ? this.props.promotions : []}
          onScroll={this.onScroll}
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
