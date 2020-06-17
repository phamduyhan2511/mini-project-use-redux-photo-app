import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onEdit: null,
  onRemove: null,
};

function PhotoList(props) {
  const { photoList, onEdit, onRemove } = props;

  return (
    <Row>
      {photoList.map(photo => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
