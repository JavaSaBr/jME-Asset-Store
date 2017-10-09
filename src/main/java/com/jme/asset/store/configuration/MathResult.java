package com.jme.asset.store.configuration;

public class MathResult {

    private double result;

    public double getResult() {
        return result;
    }

    public MathResult(double res) {
        result = res;
    }

    public MathResult(String error) {
        result = 0;
    }
}
