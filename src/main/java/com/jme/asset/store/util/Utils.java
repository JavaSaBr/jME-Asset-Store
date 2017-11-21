package com.jme.asset.store.util;

import com.ss.rlib.util.FileUtils;
import com.ss.rlib.util.array.Array;
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
     */
    public static void safeDelete(@Nullable final Path file) {
        if (file == null) return;
        FileUtils.delete(file);
    }
}
