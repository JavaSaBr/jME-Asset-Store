package com.jme.asset.store.controller;

import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Random;
@Deprecated
public class RandomFileGenerator {

    private static File root = new File("src/main/resources/public/");
    private final String fileName;
    private final int lines;

    RandomFileGenerator(String fileName, int lineCount) {
        this.fileName = fileName;
        this.lines = lineCount;
    }

    void generate() throws IOException {
        Path fullPath = new File(root, fileName).toPath();
        // make sure file exists
        Files.createDirectories(fullPath.getParent());

        Random random1 = new Random(System.currentTimeMillis());

        try (BufferedWriter bw = Files.newBufferedWriter(fullPath)) {
            for (int i = 0; i < lines; ++i) {
                String line = String.format("%s %s%n", random1.nextInt(), random1.nextInt());
                bw.write(line);
            }
        }

    }
}