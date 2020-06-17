import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './PhotoCard.scss';

function PhotoCard (props) {
  const {photo, onEdit, onRemove} = props;

  const handleEdit = ()=>{
    onEdit && onEdit(photo);
  }

  const handleRemove = ()=>{
    onRemove && onRemove(photo);
  }

  return (
    <Fragment>
      <div className="photo">
        <img src={photo.photo} alt={photo.title}/>

        <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEdit}>
              Edit
            </Button>
          </div>

          <div>
            <Button outline size="sm" color="danger" onClick={handleRemove}>
              Remove
            </Button>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
}
PhotoCard.propTypes = {};
export default PhotoCard;