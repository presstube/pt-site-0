(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 80,
	height: 80,
	fps: 60,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(2,1,1).p("AAAhjIAADH");
	this.shape.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,22);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(2,1,1).p("AAADIIAAmP");
	this.shape.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,42);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(2,1,1).p("AjHAAIGPAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-1,42,2);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAjQgPgOAAgVQAAgSAPgQQAQgPASAAQAVAAAOAPQAPAQAAASQAAAVgPAOQgOAPgVAAQgSAAgQgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1).p("AlemFIK9AAQAnAAAAAnIAAK9QAAAngnAAIq9AAQgnAAAAgnIAAq9QAAgnAnAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AleGFQgmAAAAgnIAAq8QAAgmAmAAIK8AAQAnAAAAAmIAAK8QAAAngnAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.ptlogounfolding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dot();
	this.instance.setTransform(0,0,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},10).wait(110));

	// Layer 2
	this.instance_1 = new lib.p1();
	this.instance_1.setTransform(0,0,0.002,0.002);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1},10).to({y:-20},10).wait(90));

	// Layer 3
	this.instance_2 = new lib.p2();
	this.instance_2.setTransform(20,0,1,1,90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({rotation:0,y:-20},10).wait(90));

	// Layer 4
	this.instance_3 = new lib.p2();
	this.instance_3.setTransform(20,20,1,1,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({rotation:90},10).wait(80));

	// Layer 5
	this.instance_4 = new lib.p2();
	this.instance_4.setTransform(-20,20,1,1,-90);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).to({rotation:-180},10).wait(70));

	// Layer 6
	this.instance_5 = new lib.p3();
	this.instance_5.setTransform(-20,0,1,1,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).to({scaleY:1.41,rotation:135},10).wait(60));

	// Layer 7
	this.instance_6 = new lib.p3();
	this.instance_6.setTransform(-20,20,1,1,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).to({scaleY:1.41,rotation:135},10).wait(50));

	// Layer 8
	this.instance_7 = new lib.p3();
	this.instance_7.setTransform(20,20,1,1,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({scaleY:1.41,rotation:225},10).wait(40));

	// Layer 9
	this.instance_8 = new lib.p3();
	this.instance_8.setTransform(40,0,1,1.415,45);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80).to({_off:false},0).to({scaleY:1,rotation:180},10).wait(30));

	// Layer 10
	this.instance_9 = new lib.p3();
	this.instance_9.setTransform(-20,20,1,1.412,135);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90).to({_off:false},0).to({scaleY:1,rotation:90},10).wait(20));

	// Layer 11
	this.instance_10 = new lib.p3();
	this.instance_10.setTransform(-20,20,1,0.999,90);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({_off:false},0).to({rotation:0},10).wait(10));

	// Layer 12
	this.instance_11 = new lib.p3();
	this.instance_11.setTransform(-20,40,1,0.999,0,-180,180);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(110).to({_off:false},0).to({skewX:0,skewY:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.1,0.1);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ptlogounfolding("synched",0,false);
	this.instance.setTransform(-0.5,-9.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121));

	// Layer 2
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,79,79);


// stage content:
(lib.brand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.main = new lib.main();
	this.main.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40,40,79,79);

})(brand = brand||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var brand, images, createjs, ss;