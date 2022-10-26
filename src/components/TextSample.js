import concatenarTexto from '../exercises/concatenarTexto.js'

const TextSample = `
  <div class='text-sample__wrapper'>
    <h2>
      ${concatenarTexto ? concatenarTexto : 'No text'}
    </h2>
  </div>
`

export default TextSample;