import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { connect } from 'react-redux';
import './generator.style.scss';
import * as promotionsService from '../../services/promotions.service';
import { insertPromotionDetails } from '../../store/actions/promotions.action';

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
    };
  }

  onGeneratorBtnClick = () => {
    this.setState({ showSpinner: true });
    promotionsService.generateData().then(() => {
      this.props.insertPromotionDetails(0);
      this.props.insertPromotionDetails(10);
      this.setState({ showSpinner: false });
    }).catch((err) => {
      console.error(err);
    });
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
        {this.state.showSpinner
        && (
        <div className="generator-loader">
          <Loader
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
        )}
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
