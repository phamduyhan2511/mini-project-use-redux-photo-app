import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import NotFound from '../../../components/Header';
import MainPage from './Main/MainPage';
import AddEditPage from './AddEdit/AddEditPage';

Photo.propTypes = {
    
}

function Photo(props){
    const match = useRouteMatch();

    return(
        <Switch>
            <Route exact path={match.url} component={MainPage}/>

            <Route path={`${match.url}/add`} component={AddEditPage}/>
            <Route path={`${match.url}/:photoId`} component={AddEditPage}/>
            
            <Route component={NotFound} />
        </Switch>
    )
}

export default Photo;