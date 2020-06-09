// Add your functions here

const Alist=[1,5,2,9,8];
const map=function(arr,xx){
  let newarr=[];
  arr.forEach(element=>{
    newarr.push(xx(element));
  });
  return newarr;
}
