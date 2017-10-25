package com.jme.asset.store.controller.response;

import org.jetbrains.annotations.NotNull;

/**
 * The class to present an error response with message.
 *
 * @author Alex Brui.
 */
public class ErrorResponse {

    /**
     * The error message.
     */
    @NotNull
    private final String message;

    public ErrorResponse(final String message) {
        this.message = message;
    }

    /**
     * Gets the error message.
     *
     * @return the error message.
     */
    public @NotNull String getMessage() {
        return message;
    }
}
