import React, { Fragment } from "react";
import "./styles.scss";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import Images from "../../../../constants/Images";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { useHistory, useParams } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { photoId } = useParams();
  const isAddMode = !photoId;
  const editedPhoto = useSelector((state) =>
    state.photos.find((i) => i.id === +photoId)
  );

  const initialValue = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const action = addPhoto(values);

          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <Fragment>
      <Banner title="This is Anfield" backgroundUrl={Images.Liverpool_BG} />
      <div className="photo-edit__from">
        <PhotoForm onSubmit={handleSubmit} initialValue={initialValue} isAddMode={isAddMode}/>
      </div>
    </Fragment>
  );
}

export default AddEditPage;
