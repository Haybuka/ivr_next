'use client';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from '@/app/components/button';
import FormInput from './formInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, 'on submuit');
  };

  console.log(errors);
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
        render={({ field }) => {
          return <FormInput title="Name" field={field} />;
        }}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => {
          return <FormInput title="Phone Number" type="number" field={field} />;
        }}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => {
          return <FormInput title="Email" type="email" field={field} />;
        }}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => {
          return <FormInput title="Message" type="textarea" field={field} />;
        }}
      />
      <Button text="Submit" propStyle="text-center block w-full my-3" />
    </form>
  );
};

export default Form;
