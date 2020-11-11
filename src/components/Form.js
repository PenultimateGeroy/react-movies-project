import React from 'react'

import { makeStyles } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    marginTop: '25px',
    backgroundColor: "#3f51b5",
    color: 'white'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '83px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 400
  },
  select:{
      minWidth: 200
  },
  formControl:{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}))

const Form = props => {
  const classes = getStyles()
  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
        <TextField
            label='Search'
            name='search'
            className={classes.textField}
            onChange={e => props.onInputChange(e.target.value)}
            margin='normal'
            variant='outlined'
        />
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
                Search Type
            </InputLabel>
            <Select
            className={classes.select}
            onChange={e => props.onSearchTypeChange(e.target.value)}
            labelId="demo-simple-select-outlined-label"
            label="Search Type"
            >

                <MenuItem value="movie">Movie</MenuItem>
                <MenuItem value="multi">Multi</MenuItem>
                <MenuItem value="tv">TV</MenuItem>
            </Select>
        </FormControl>
      <Button variant='outlined' className={classes.button} type='submit'>
        Search
      </Button>
    </form>
  )
}

export default Form
