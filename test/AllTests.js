/**
 * Created by echchouik on 30/09/2015.
 */
MonTestCase = TestCase("MonTestCase");

var e = new Engine();
e.init();

MonTestCase.prototype.test1 = function() {
    assertTrue(e.getNbBall() === 0);
};

MonTestCase.prototype.test2 = function() {
    assertTrue(e.getCurrentPlayer() === "white");
};

MonTestCase.prototype.test3 = function() {
    e.putBall('a1');
    assertTrue(e.checkPutBall('a1') === "white");
};

MonTestCase.prototype.test4 = function() {
    assertTrue(e.getNbBall() === 1);
};