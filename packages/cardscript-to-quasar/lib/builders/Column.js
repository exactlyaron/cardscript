const ComponentBuilder = require('./../utils/Component-builder')
// const GetAttribute = require('./../utils/Get-attribute')

module.exports = function (definition, options) {
  // const getAttribute = GetAttribute(widgetDefinition)
  const builder = new ComponentBuilder(definition)
  const pre = builder.addTag('pre')
  pre.content('// TODO: Column!')
  return builder.compile()
}
