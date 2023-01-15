export const getData = async (urlApi, param, cbError = () => {}) => {
try {
const url = new URL(urlApi)

if (param && typeof param === 'object') {
  for (const key in param) {
    url.searchParams.set(key, param[key])
  }
} 

const response = await fetch(url);
const data = await response.json();
if (!response.ok) {
    throw new Error(data.message)
} 


return data
}
    catch(err){
console.warn(err);
if(typeof param === 'function'){
    param(err);
} else{
    cbError(err);
}
}
}