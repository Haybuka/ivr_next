'use client';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from '@/app/components/button';
import FormInput from './formInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log(data, 'on submuit');
  };

  return (
    <form
      className=" my-4 lg:shadow-md bg-white p-2 rounded-lg lg:px-5 w-full lg:w-[600px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="uppercase text-lg lg:text-2xl border-b-2 pb-3 font-titilium">
        Get Quote
      </h3>
      <Controller
        name="name"
        type="text"
        control={control}
        render={({ field, formState: { errors } }) => {
          const error = errors[field?.name]?.message;
          return <FormInput title="Name" field={field} error={error} />;
        }}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field, formState: { errors } }) => {
          const error = errors[field?.name]?.message;
          return (
            <FormInput
              title="Phone Number"
              type="number"
              field={field}
              error={error}
            />
          );
        }}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, formState: { errors } }) => {
          const error = errors[field?.name]?.message;
          return (
            <FormInput title="Email" type="email" field={field} error={error} />
          );
        }}
      />
      <Controller
        name="message"
        control={control}
        render={({ field, formState: { errors } }) => {
          const error = errors[field?.name]?.message;
          return (
            <FormInput
              title="Message"
              type="textarea"
              field={field}
              error={error}
            />
          );
        }}
      />
      {!isSubmitting && (
        <Button text="Submit" propStyle="text-center block w-full my-6" />
      )}
    </form>
  );
};

export default Form;
