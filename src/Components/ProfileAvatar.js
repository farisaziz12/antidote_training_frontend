import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import defaultImage from '../Images/empty_profile_pic.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  green: {
    color: theme.palette.getContrastText('#34A953'),
    backgroundColor: '#34A953',
  },
}));

export default function ProfileAvatar() {
  const classes = useStyles();
  const [user, setUser] = useState(null)

  return (
    <div className={classes.root}>
      {user? <Avatar className={classes.green}>FA</Avatar> : <Avatar src={defaultImage}></Avatar>}
    </div>
  );
}