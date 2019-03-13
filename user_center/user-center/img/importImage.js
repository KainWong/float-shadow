var args = process.argv.splice(2)
// args[0]：读取的文件路径；args[1]: ；arg[2]：生成的文件路径
const fs = require('fs');
const files = fs.readdirSync(args[0]);
const ms = files.map(filename => {
    const name = filename.split('.')[0];
    return name.replace(/([-_].{1})/g, value => value[1].toUpperCase());
})

const template = `${files.map((filename, index) => 'import ' + ms[index] + ' from \'' + args[1] + '/' + filename + '\'').join(';\n')}
export {
    ${ms}
}
`
fs.writeFileSync(args[2], template);


// 参数依次为：读取的文件路径， 读取的文件路径相对于生成的文件路径的路径，生成的文件路径
// eg:
// node  importImg.js  ./assets/class   ../assets/class   ./importImage/classImage.js