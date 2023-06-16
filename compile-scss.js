const sass = require('sass');
const fs = require('fs');

const inputFilePath = 'style.scss'
const outputFilePath = 'C:\Users\Éllen\Desktop\exercicio sass\static.lms.ebaconline.com.br_content-files_3c13755c-895e-4f15-96e9-6d47d9a47d9c_original.css';

const result = sass.renderSync({
  file: inputFilePath,
  outputStyle: 'expanded' // ou 'compressed' para minificar o CSS resultante
});

fs.writeFileSync(outputFilePath, result.css.toString());
