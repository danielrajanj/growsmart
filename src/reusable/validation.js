export const validate = values => {
    console.log(values)
    const errors = {}
    if (!values.Name) {
      errors.Name = '* Required'
    } else if (values.Name.length > 15) {
      errors.Name = '* Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = '* Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = '* Invalid email address'
    }
    if( !values.phone) {
        errors.phone = '* Required'
    } else if (values.phone.length !== 10) {
        errors.phone = '* Must be 10 digits'
    }
    if( !values.pin) {
        errors.pin = '* Required'
    } else if (values.pin.length !== 6) {
        errors.pin = '* Must be 6 digits'
    }
    if( !values.city) {
        errors.city = '* Required'
    }
    if( !values.gender) {
      errors.gender = '* Required'
    } 
    return errors
  }