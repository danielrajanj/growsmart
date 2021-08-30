export const inputComponent = ({
    input,
    label,
    type,
    meta: { error, invalid }
  }) => (
    <div className="input-group">
      <p>{label}</p>
        <input {...input} type={type} maxLength="30"/>
        {((invalid && <span className="error-span">{error}</span>))}
    </div>
  )