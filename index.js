var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
  var myobj = Object.assign({}, object)
  //newObj = Object.assign({}, obj)
  delete myobj[key]
  return myobj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return  object
}
