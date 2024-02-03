import cls from 'classnames';
import styles from '../quote/quote.module.css';

const FormInput = ({ title, type = 'text', field }) => {
  return (
    <label className="my-3">
      <p className={cls(styles.label)}>{title} : </p>
      {type === 'textarea' ? (
        <textarea {...field} className={cls(styles.input)} />
      ) : (
        <input {...field} type={type} className={cls(styles.input)} />
      )}
    </label>
  );
};

export default FormInput;
