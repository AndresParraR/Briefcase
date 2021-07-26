import React, { useState, memo } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button} from '@material-ui/core';

import ContactService from '../services/ContactService'

import { useForm, Controller } from 'react-hook-form'

const Banner = (props) => {

  const { register, handleSubmit, control, formState: { errors }, reset, clearErrors, setValue } = useForm();

  const onSubmit = async (data, e) => {
    console.log(data, e)
    setValue('names', '')
    setValue('email', '')
    setValue('message', '')
    clearErrors()
    try{
      const res = await ContactService.sendEmail(data)
      props.setSnack({mode: 'success', text: 'Thanks for contact me!'})
    }catch(err){
      props.setSnack({mode: 'error', text: 'Ups... Something was wrong!. Please try again'})
    }
    props.openSnack(true)
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 70,
    },
    titleContact:{
      textAlign: 'center',
      marginBottom: 20
    },
    form:{
      display: 'flex',
      flexWrap: 'wrap',
      padding: '3rem 2rem',
      borderRadius: 15,
      zIndex: 2
    },
    column: {
      width: '100%',
      padding: '1rem 1.5rem',
      minWidth: 210,
    },
    input:{
      width: '100%'
    },
    sendBtn:{
      margin: '1rem 1.5rem',
      textTransform: 'none',
      background: 'rgba(255, 255, 255, 0.1)',
      borderTop: '1px solid rgba(255, 255, 255, 0.5)',
      borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
      borderRight: '1px solid rgba(255, 255, 255, 0.5)',
    }
  }));

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'width-adjust')}>
      <h1 className={classes.titleContact}>Contact Me</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
        <div className={classes.column}>
          <Controller
            defaultValue=""
            control={control} 
            name='names'
            // rules={{required:{value: true, message: 'Campo obligatorio'}}} 
            render={({ field }) => <TextField
              className={classes.input}
              variant="outlined"
              error={errors?.names?.message ? true : false}
              helperText={errors?.names?.message && errors.names.message}
              label="Names"
              {...field} /> }
          />
        </div>
        <div className={classes.column}>
          <Controller
            defaultValue=""
            control={control} 
            name='email'
            rules={{pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }}} 
              render={({ field }) => <TextField
              className={classes.input}
              variant="outlined"
              error={errors?.email?.message ? true : false}
              helperText={errors?.email?.message && errors.email.message}
              label="Email Address"
              {...field}/>}
          />
        </div>
        <div className={classes.column}>
          <Controller
            defaultValue=""
            control={control} 
            name='message'
            rules={{required:{value: true, message: 'Campo obligatorio'}}} 
            render={({ field }) => <TextField
              multiline
              rows={6}
              control={control}
              className={classes.input}
              variant="outlined"
              error={errors?.message?.message ? true : false}
              helperText={errors?.message?.message && errors.message.message}
              label="Message"
              {...field}/>}
          />
        </div>
        <Button variant="contained" type="submit" className={classes.sendBtn}>
          Send
        </Button>
      </form>
    </div>
  )
}

export default memo(Banner)