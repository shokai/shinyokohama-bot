"use strict";

import "./test_helper";
import assert from "assert";
import weather from "../src/weather";

describe("crawler Weather", function(){

  it("should have method \"getForecast\"", function(){
    assert.equal(typeof weather["getForecast"], "function");
  });

  describe("method \"getForecast\"", function(){

    it("should return forecast", function(){
      this.timeout(10000);
      return weather
        .getForecast()
        .then((forecast) => {
          assert.equal(/[晴雨曇雪]/.test(forecast.text), true);
          assert.equal(typeof forecast.temperature.high, "number");
          assert.equal(typeof forecast.temperature.low, "number");
          assert.equal(forecast.temperature.high >= forecast.temperature.low, true);
        });
    });

  });
});
