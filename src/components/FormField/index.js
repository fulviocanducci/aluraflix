import React from 'react';
import PropTypes from 'prop-types';

function RenderTagsFormField({ name, label, children }) {
  return (
    <div>
      <label htmfor={`id_${name}`}>
        {label}:{children}
      </label>
    </div>
  );
}

function FormField({ type, label, name, value, onChange }) {
  function renderFormField(type, label, name, value, onChange) {
    var result = null;
    switch (type) {
      case 'textarea': {
        result = (
          <RenderTagsFormField name={name} label={label}>
            <textarea
              id={`id_${name}`}
              name={name}
              onChange={onChange}
              value={value}
            />
          </RenderTagsFormField>
        );
        break;
      }
      default: {
        result = (
          <RenderTagsFormField name={name} label={label}>
            <input
              id={`id_${name}`}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
          </RenderTagsFormField>
        );
      }
    }
    return result;
  }
  return renderFormField(type, label, name, value, onChange);
}

FormField.defaultProps = {
  type: 'text',
  label: 'default',
};

FormField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
