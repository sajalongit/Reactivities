import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/Store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard(){
    
    var {activityStore} = useStore();
    var {selectedActivity, editMode } = activityStore;

    return(
        <Grid>
            <Grid.Column width='10'>
               <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails />}
                {editMode &&
                    <ActivityForm />}
            </Grid.Column>
        </Grid>
    )
})