const errors = new Map();

export default class ErrorRepository {
  constructor(error, description) {
    this.error = error;
    this.description = description;

    errors.set(this, { error, description });
  }

  translate(code) {
    if (errors.get(this).error === code) {
      return errors.get(this).description;
    }
    return 'Unknown error';
  }
}