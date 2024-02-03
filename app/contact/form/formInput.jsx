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
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </label>
  );
};

export default FormInput;
