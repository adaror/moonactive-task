import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import './generator.style.scss';
import * as promotionsService from '../../services/promotions.service';
import { insertPromotionDetails } from '../../store/actions/promotions.action';

class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.onGeneratorBtnClick = this.onGeneratorBtnClick.bind(this);
  }

  onGeneratorBtnClick() {
    this.props.insertPromotionDetails(0);
  }

  render() {
    return (
      <div className="generator-container">
        <Button
          variant="contained"
          color="primary"
          onClick={this.onGeneratorBtnClick}
        >
          Generate Data
        </Button>
      </div>
    );
  }
}

Generator.defaultProps = {
  insertPromotionDetails: PropTypes.func,
};

const mapDispatchToProps = {
  insertPromotionDetails,
};

export default connect(null, mapDispatchToProps)(Generator);
