const ComponentBuilder = require('./../utils/Component-builder')
const GetAttribute = require('./../utils/Get-attribute')

module.exports = function fileUploadConverter (widgetDefinition, options) {
  // captionPath
  // enabled
  // formatRestriction
  // heading
  // help
  // mandatory
  // maxFileSize
  // maxNumberOfFiles
  // minNumberOfFiles
  const getAttribute = GetAttribute(widgetDefinition)
  const builder = new ComponentBuilder(widgetDefinition)

  const caption = builder.addTag('p')
  caption.addAttribute('class', 'q-ml-xl caption')
  caption.content(getAttribute('heading'))

  const uploader = builder.addTag('q-uploader')
  uploader.addAttribute('class', 'q-ma-xl')
  uploader.addAttribute('url', '""')

  return builder.compile()
}
