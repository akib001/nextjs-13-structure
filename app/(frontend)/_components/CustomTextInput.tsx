import {FormControl, FormHelperText, TextField} from '@mui/material';
import React from 'react';
import {Controller} from 'react-hook-form';
import TextInputSkeleton from "@/app/(frontend)/_components/TextInputSkeleton";

type Props = {
    id: string;
    label?: string;
    className?: string;
    variant?: 'outlined' | 'standard' | 'filled';
    size?: 'small' | 'medium';
    isLoading?: boolean;
    // register?: any;
    control?: any;
    errorInstance?: any;
    multiline?: boolean;
    disabled?: boolean;
    rows?: number;
    type?: string;
    defaultValue?: string;
    inputProps?: any;
    helperText?: any;
    [x: string]: any;
    onInput?: any;
};

export const getErrorObject = (id: any, errorInstance: any) => {
    const keyArray = id
        .replaceAll('.', ',')
        .replaceAll('[', ',')
        .replaceAll(']', '')
        .split(',');
    let errorObj = errorInstance;
    keyArray.forEach((key: string) => {
        errorObj = errorObj?.[key];
    });
    return errorObj;
};

export const catchBlockHandler = (error: any, message = '') => {
    throw error;
};

const CustomTextInput = ({
                             id,
                             label,
                             className,
                             variant,
                             size,
                             isLoading,
                             // register,
                             control,
                             errorInstance,
                             multiline,
                             rows,
                             type,
                             defaultValue,
                             inputProps,
                             disabled,
                             onInput: onChangeCallback,
                             helperText,
                             ...rest
                         }: Props) => {
    let errorObj = getErrorObject(id, errorInstance);

    return isLoading ? (
        <TextInputSkeleton sx={{width: '100%'}}/>
    ) : (
        <>
            <FormControl fullWidth={true}>
                <Controller
                    render={({field: {ref, onChange, value = defaultValue}}) => (
                        <TextField
                            fullWidth
                            ref={ref}
                            variant={variant ? variant : 'outlined'}
                            size={size ? size : 'small'}
                            className={className}
                            label={label}
                            title={label as string}
                            multiline={multiline}
                            rows={rows}
                            type={type}
                            error={errorObj && Boolean(errorObj)}
                            helperText={
                                errorObj && errorObj.message ? (
                                    errorObj.message
                                ) : (
                                    ''
                                )
                            }
                            onInput={(event: any) => {
                                let value =
                                    type == 'file' ? event.target.files : event.target.value;
                                if (onChangeCallback) {
                                    onChangeCallback(value);
                                }
                            }}
                            onChange={(event: any) => {
                                let value =
                                    type == 'file' ? event.target.files : event.target.value;
                                onChange(value);
                            }}
                            value={value ?? ''}
                            disabled={disabled ? disabled : false}
                            inputProps={{...inputProps, ...{required: false}}}
                            {...rest}
                        />
                    )}
                    name={id}
                    control={control}
                    defaultValue={defaultValue ?? ''}
                />
            </FormControl>

            {helperText && (
                <FormHelperText sx={{color: 'primary.main'}}>
                    {helperText}
                </FormHelperText>
            )}
        </>
    );
};

export default CustomTextInput;
