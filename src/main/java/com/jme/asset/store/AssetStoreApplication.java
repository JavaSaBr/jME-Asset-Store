package com.jme.asset.store;

import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SpringBootApplication
public class AssetStoreApplication {

    /**
     * The name of an admin user of this application.
     */
    @Value("${application.user.admin.name}")
    private String userAdminName;

    /**
     * The password of an admin user of this application.
     */
    @Value("${application.user.admin.password}")
    private String userAdminPassword;

    public static void main(String[] args) throws Exception {
        SpringApplication.run(AssetStoreApplication.class, args);
    }

    @RequestMapping(value = "/root")
    public String root() {
        return "index";
    }

    /**
     * Gets the name of an admin user of this application.
     *
     * @return the name of an admin user of this application.
     */
    public @NotNull String getUserAdminName() {
        return userAdminName;
    }

    /**
     * Gets the password of an admin user of this application.
     *
     * @return the password of an admin user of this application.
     */
    public @NotNull String getUserAdminPassword() {
        return userAdminPassword;
    }
}
