import {useForm} from 'react-hook-form';
import {useState, useEffect} from 'react';
import {Modal} from '../../components/Modal/Modal';
import {Input} from '../../components/Input/Input';
import {RadioButton} from '../../components/RadioButton/RadioButton';
import {Button} from '../../components/Button/Button';
import {getCalculatedPayment, formatAmount} from './utils';
import {termOptions, paymentPeriodOptions} from './constants';

import styles from './CalcModal.module.css';

export const CalcModal = (props) => {
  const [isCalculated, setIsCalculated] = useState(false);
  const [paymentPeriod, setPaymentPeriod] = useState('monthly');

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      amount: '',
      term: 12,
    },
  });

  const term = watch('term');
  const amount = watch('amount');
  const calculatedPayment = getCalculatedPayment(amount, term);

  useEffect(() => {
    if (amount === '') {
      setIsCalculated(false);
    }
  }, [amount]);

  const onSubmit = () => {
    setIsCalculated(true);
  };

  const onSubmitForm = () => {
    console.log('Отправка данных формы:', getValues());

    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <Modal title="Платежи по кредиту" {...props}>
      <p className={styles.description}>
        Введите сумму кредита и выберите срок, на который вы хотите его
        оформить. <br />
        Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли
        лучше спланировать свои финансы.
      </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="amount">
          Ваша сумма кредита
        </label>
        <Input
          className={styles.formInput}
          type="number"
          id="amount"
          placeholder="Введите данные"
          error={errors.amount?.message}
          {...register('amount', {
            required: 'Поле обязательно для заполнения',
            min: {
              value: 1,
              message: 'Сумма должна быть больше 0',
            },
          })}
        />
        <Button type="submit" className={styles.formButton} variant="text">
          Рассчитать
        </Button>
        <div className={styles.termSection}>
          <label className={styles.label}>Количество месяцев?</label>
          <div className={styles.radioWrapper}>
            {termOptions.map((option) => (
              <RadioButton
                key={option.value}
                label={option.label}
                name="term"
                value={option.value}
                isActive={Number(term) === option.value}
                {...register('term')}
              />
            ))}
          </div>
        </div>
      </form>
      {isCalculated && (
        <div className={styles.paymentPeriodSection}>
          <label className={styles.label}>Итого ваш платеж по кредиту:</label>
          <div className={styles.paymentPeriodToggle}>
            {paymentPeriodOptions.map((option) => (
              <RadioButton
                key={option.value}
                label={option.label}
                name="paymentPeriod"
                value={option.value}
                isActive={paymentPeriod === option.value}
                onClick={() => {
                  setPaymentPeriod(option.value);
                }}
              />
            ))}
          </div>
          <p className={styles.paymentPeriodAmount}>
            {formatAmount(calculatedPayment[paymentPeriod])} рублей
          </p>
        </div>
      )}
      <Button
        type="button"
        className={styles.footerButton}
        variant="primary"
        disabled={!isValid || !isCalculated}
        onClick={handleSubmit(onSubmitForm)}
      >
        Добавить
      </Button>
    </Modal>
  );
};
