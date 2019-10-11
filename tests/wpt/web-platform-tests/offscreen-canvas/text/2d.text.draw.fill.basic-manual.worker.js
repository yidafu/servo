// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.draw.fill.basic
// Description:fillText draws filled text
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("fillText draws filled text");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';
ctx.font = '35px Arial, sans-serif';
ctx.fillText('PASS', 5, 35);

t.done();

});
done();
