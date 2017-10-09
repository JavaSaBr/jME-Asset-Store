package com.jme.asset.store.controller;

public class MathParametrs {

    private double firstParam;
    private double secondParam;

    public MathParametrs() {
    }

    MathParametrs(double firstParam, double secondParam) {
        this.firstParam = firstParam;
        this.secondParam = secondParam;
    }

    public double getFirstParam() {
        return firstParam;
    }

    public double getSecondParam() {
        return secondParam;
    }
}
