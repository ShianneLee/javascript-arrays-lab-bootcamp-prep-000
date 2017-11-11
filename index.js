const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){
  var k = [...kittens, name]
  return k
}
function prependKitten(name){
  var k = [name, ...kittens]
  return k
}
function removeLastKitten(){
  
}
function removeFirstKitten(){
  
}