import React from "react";

export default function SelectBox({
  label,
  placeholder,
  required,
  description,
  type,
  name,
  option1,
  option2,
  option3,
  option4,
  onChange
}) {
  return (
    <div className="start__up__container__form__input__box">
      <div className="start__up__container__form__input__box__label">
        {placeholder}{" "}
        <div className="start__up__container__form__input__box__label__required">
          {required ? "*" : null}
        </div>
      </div>
      {description ? (
        <div className="start__up__container__form__input__box__label__explain">
          {description}
        </div>
      ) : null}
      <div className="start__up__container__form__input__box__content">
        <input
          list={name}
          //   id="ice-cream-choice"
          name={name}
          placeholder={placeholder}
          className="start__up__container__form__input__box__field"
          onChange={onChange}/>
        <datalist id={name}>
          {option1}
          {option2}
          {option3}
          {option4}
        </datalist>
      </div>
    </div>
  );
}