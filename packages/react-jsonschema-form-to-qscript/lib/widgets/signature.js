module.exports = class Signature {
  constructor (options) {
    this.widget = {
      id: options.id,
      type: 'signature',
      attributes: {
        heading: options.schema.title,
        mandatory: options.mandatory
      }
    }
    if (options.conditionalSchema.length > 0) this.widget.showWhen = options.conditionalSchema[0]
  }
}
