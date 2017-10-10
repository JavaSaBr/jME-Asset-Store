package com.jme.asset.store.MathObject;

public class MathResult {
    private double result;

    public MathResult() {
    }

    public MathResult(double result) {
        this.result = result;
    }

    public double getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return "MathResult{" +
                "result=" + result +
                '}';
    }
}
