package com.jme.asset.store.configuration;

public class MathResult {

    private final double result;

    public double getResult() {
        return result;
    }

    public MathResult(final double res) {
        result = res;
    }

    public MathResult(final String error) {
        result = 0;
    }
}
