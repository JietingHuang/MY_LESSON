// {{name}}, {{age}}
function render (tpl, data) {
  // 1. 找到所有的{{}} regexp /{\{\(.+)\}\}/g
  return tpl.replace(/\{\{(.+?)\}\}/g, function ($1, $2) {
    // console.log($1, $2);
    return data[$2];
  })
}
let tmpl = `
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
`
console.log(render(tmpl, {name: 'jaunty', age: 18}));