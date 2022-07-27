import { useState } from 'react';
import FormCard from './FormCard';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../reducers/redusers';

export interface CardData {
  name: string;
  date: string;
  country: string;
  human: boolean;
  sex: string;
  avatar: FileList | null;
}

export default function Forms() {
  const dispatch = useDispatch();
  const reduxData = useSelector((state: Store) => state.forms);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CardData>({ mode: 'onChange' });

  const [doneText, changeText] = useState('');

  const onSubmit = (data: CardData) => {
    let array = [];

    array = reduxData;
    array.push(data);

    dispatch({
      type: 'save-cards',
      formsPageStateData: array,
    });

    changeText('success');

    setTimeout(() => {
      changeText('');
    }, 2000);
  };

  let i = 0;

  return (
    <>
      <form className="main__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="form__name">
          Your Name
          <input
            className="form__name-input"
            type="text"
            {...register('name', { required: true })}
          />
          <div className="form_error-name">{errors.name && <p>invalid</p>}</div>
        </label>
        <label className="form__date">
          Your Birthday
          <input
            className="form__date-input"
            type="date"
            {...register('date', { required: true })}
          />
          <div className="form_error-date">{errors.date && <p>invalid</p>}</div>
        </label>
        <label>
          Your Country
          <select className="form__select" {...register('country')}>
            <option value="Country 1">Country 1</option>
            <option value="Country 2">Country 2</option>
            <option value="Country 3">Country 3</option>
            <option value="Country 4">Country 4</option>
            <option value="Country 5">Country 5</option>
            <option value="Country 6">Country 6</option>
          </select>
        </label>
        <label className="form__check">
          Are you human?
          <div className="form__check-data">
            <input
              className="form__check-input"
              type="checkbox"
              value="human"
              {...register('human', { required: true })}
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="form_error-check">{errors.human && <p>invalid</p>}</div>
        </label>
        <label className="form__switch">
          Your gender
          <div className="form__switch-data">
            <div className="form__switch-woman">woman</div>
            <input
              className="form__switch-input"
              type="range"
              min="0"
              max="1"
              {...register('sex', { required: true })}
            />
            <div className="form__switch-man">man</div>
          </div>
        </label>
        <label>
          Choose your picture
          <input
            className="form__file-input"
            type="file"
            {...register('avatar', { required: true })}
          />
          <div className="form_error-file">{errors.avatar && <p>invalid</p>}</div>
        </label>
        <input className="form__button" type="submit" disabled={!isValid} />
        <div className="form__success-submit">{doneText}</div>
      </form>
      <div className="form__cards">
        {reduxData.length > 1
          ? reduxData.map((item: CardData) =>
              item.name !== '' ? <FormCard data={item} key={i++} /> : null
            )
          : null}
      </div>
    </>
  );
}
