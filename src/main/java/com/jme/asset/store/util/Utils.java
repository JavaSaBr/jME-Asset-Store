package com.jme.asset.store.util;

import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * The class with utility methods.
 *
 * @author Alex Brui
 */
public class Utils {

    /**
     * Try to delete the file.
     *
     * @param file the file to delete.
     * @return false if we had some errors.
     */
    public static boolean safeDelete(@Nullable final Path file) {
        if (file == null) return true;
        try {
            Files.delete(file);
            return true;
        } catch (final IOException e) {
            e.printStackTrace();
            return false;
        }
    }
}
