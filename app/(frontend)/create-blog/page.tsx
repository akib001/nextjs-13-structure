'use client'
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Grid from "@mui/material/Grid";
import CustomTextInput from "@/app/(frontend)/_components/CustomTextInput";
import Button from "@mui/material/Button";

const schema = yup
    .object()
    .shape({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
    })
    .required();

const CreateBlogs = () => {
    const {register, handleSubmit, control, formState: {errors, isSubmitting}} = useForm({
        resolver: yupResolver(schema),
    });

    console.log('errors', errors);

    return (
        <form onSubmit={handleSubmit((d) => console.log(d))}>
            <Grid container p={10} spacing={2}>
                <Grid item xs={6}>
                    <CustomTextInput
                        id='first_name'
                        required
                        size={'medium'}
                        defaultValue={''}
                        disabled={false}
                        label={'First Name'}
                        control={control}
                        errorInstance={errors}
                        isLoading={false}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CustomTextInput
                        id='last_name'
                        required
                        size={'medium'}
                        defaultValue={''}
                        disabled={false}
                        label={'Last Name'}
                        control={control}
                        errorInstance={errors}
                        isLoading={false}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleSubmit((d) => console.log(d))} variant={'contained'}
                            type={'submit'}>Submit</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default CreateBlogs;