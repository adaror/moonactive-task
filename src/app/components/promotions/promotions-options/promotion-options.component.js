import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Edit, FileCopy, Delete} from '@material-ui/icons';
import './promotion-options.style.scss';

class PromotionOptions extends React.Component {

    onEdit = () => {
        console.log('edit');
    }

    onDuplicate = () => {
        console.log('duplicate');
    }

    onDelete = () => {
        console.log('onDelete');
    }

    render() {
        const isShow = Object.keys(this.props.selectedPromotions).length > 0;
        return(
            isShow 
            &&
            <div className='promotion-options-container'>
                <Edit 
                    className='promotion-icon'
                    onClick={this.onEdit}
                />
                <FileCopy 
                    className='promotion-icon'
                    onClick={this.onDuplicate}
                />
                <Delete
                    className='promotion-icon' 
                    onClick={this.onDelete}
                />
            </div>
        )
    }
}

PromotionOptions.propTypes = {
    selectedPromotions: PropTypes.object
  };

const mapStateToProps = (state, ownProps) => ({
    selectedPromotions: state.selectedPromotions
  });
  
export default connect(mapStateToProps, null)(PromotionOptions);

