module.exports = {
  showWhen: true,
  bindToDataModel: true,
  openingTag: true,
  closingTag: true
}

// export function templateCompiler (widget) {
//   const attribs = []
//   attribs.push(`v-model = "data.${widget.key}"`)
//   attribs.push(`label="${widget.config.dataSchemaEntry.title}"`)
//
//   const placeholder = widget.config.uiWidgetEntry.ui_placeholder
//   if (placeholder) {
//     attribs.push(`placeholder="${widget.config.uiWidgetEntry.ui_placeholder}"`)
//   }
//
//   return `<app-text ${attribs.join(' ')}></app-text>`
// }
