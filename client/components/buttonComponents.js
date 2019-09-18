import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  // useEffect(() => {
  //   fetch('/search', {
  //     body: JSON.stringify({searchString: `${event.target.value}`})
  //   })
  // })

  return (
    <div>
     
      <Button variant="contained" id="primary" className={classes.button}>
        Search
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
    </div>
  );
}