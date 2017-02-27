var assert = require('assert');
var resultado= require('../holamundo.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('hola', function(){
  it("should return languages",function(){
    assert.equal(resultado.hola("es"),"Hola Mundo!")
   assert.equal(resultado.hola("al"),"Hallo Welt!")
    assert.equal(resultado.hola("en"),"Hello Word!")
  })
  it("should return Hola mundo!",function(){
    assert.equal(resultado.hola("string"),"Hola Mundo!")
  })


  //it("should raise an error if one param is missing",function(){
    //assert.equal(resultado.hola(2),"Error")
  //})

});
