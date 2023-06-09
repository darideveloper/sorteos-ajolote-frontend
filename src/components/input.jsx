import PropTpes from 'prop-types'

export default function Input({ label, inputType, id, placeholder, required=false, value, onChange, isInvalid=false }) {

  return (
    <div className="input-wrapper group py-2 w-5/6">
      <label
        htmlFor={id}
        className="text-xl block py-2 group-hover:translate-x-1 duration-300 text-start"
        required={required}
      >
        {label}
      </label>
      <input
        type={inputType}
        name={id}
        id={id}
        placeholder={placeholder}
        className='w-full px-5 py-2 rounded-md focus:ring-2 duration-300 ring-yellow-light focus:ring-yellow border-red-500'
        value={value}
        onChange={onChange}
        style={{
          borderWidth: isInvalid ? "2px" : "0px"
        }}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTpes.string.isRequired,
  inputType: PropTpes.string.isRequired,
  id: PropTpes.string.isRequired,
  placeholder: PropTpes.string.isRequired,
  required: PropTpes.bool,
  value: PropTpes.string.isRequired,
  onChange: PropTpes.func.isRequired,
  isInvalid: PropTpes.bool
}