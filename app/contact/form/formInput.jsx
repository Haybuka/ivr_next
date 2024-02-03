import cls from 'classnames';
import styles from '../quote/quote.module.css';

const FormInput = ({ title, type = 'text', field, error }) => {
  // const error = errors[field.name];

  // console.log(field.name, error);
  return (
    <label className="my-3">
      <p className={cls(styles.label)}>{title} : </p>
      {type === 'textarea' ? (
        <textarea {...field} className={cls(styles.input)} />
      ) : (
        <input {...field} type={type} className={cls(styles.input)} />
      )}
      {error && (
        <p className="text-red-500 text-[12px] my-2">
          {`${error.slice(0, 1).toUpperCase()}${error.slice(1)} `}
        </p>
      )}
    </label>
  );
};

export default FormInput;
