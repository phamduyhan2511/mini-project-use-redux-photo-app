import React from 'react';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import { useSelector, useDispatch } from 'react-redux';
import PhotoList from '../../components/PhotoList';
import {removePhoto} from '../../photoSlice';

MainPage.propTypes = {
    
}

function MainPage(props){

    const dispatch = useDispatch();
    const history = useHistory();

    const photos = useSelector(state => state.photos);

    const onEditPhoto=(photo)=>{
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl);
    };

    const onRemovePhoto=(photo)=>{
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }

    return(
        <div className="photo-main">
            <Banner title="This is mini project"/>
            <Container className="text-center">
                <div className="py-5">
                <Link to="/photos/add">
                    Add new photo
                </Link>
                </div>
                <PhotoList
                    photoList={photos}
                    onEdit={onEditPhoto}
                    onRemove={onRemovePhoto}
                />
            </Container>
        </div>
    )
}

export default MainPage;