package com.jme.asset.store.entity;

import com.jme.asset.store.entity.BaseEntity;
import org.apache.catalina.LifecycleState;

import javax.persistence.*;
import java.util.List;

/**
 * The user entity.
 *
 * @author Denis Lesheniuk
 */
@Entity
@Table(name = "USER_ENTITY",
        indexes = {
                @Index(columnList = "login", name = "user_login_index")
        })
public class UserEntity extends BaseEntity {

    /**
     * The user login.
     */
    @Column(name = "login", length = 50, nullable = false, unique = true)
    private String login;

    /**
     * The user first name.
     */
    @Column(name = "first_name", length = 50)
    private String firstName;

    /**
     * The user last name.
     */
    @Column(name = "last_name", length = 50)
    private String lastName;

    /**
     * The user middle name.
     */
    @Column(name = "middle_name", length = 50)
    private String middleName;

    /**
     * The user mail.
     */
    @Column(name = "mail", length = 50, unique = true)
    private String mail;

    /**
     * The user password.
     */
    @Column(name = "password", length = 50, nullable = false)
    private String password;

    /**
     * The user roles.
     */
    @ManyToMany(fetch = FetchType.EAGER)
    private List<RoleEntity> roles;

    /**
     * Get the user login
     *
     * @return the user login.
     */
    public String getLogin() {
        return login;
    }

    /**
     * Set the user login
     *
     * @param login the user login.
     */
    public void setLogin(String login) {
        this.login = login;
    }

    /**
     * Get the user first name
     *
     * @return the user first name.
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Set the user first name
     *
     * @param firstName the user first name
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * Get the user last name
     *
     * @return the user last name.
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Set the user last name
     *
     * @param lastName the user last name.
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * Get the user middle name
     *
     * @return the user middle name.
     */
    public String getMiddleName() {
        return middleName;
    }

    /**
     * Set the user middle name
     *
     * @param middleName the user middle name.
     */
    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    /**
     * Get the user e-mail
     *
     * @return the user mail.
     */
    public String getMail() {
        return mail;
    }

    /**
     * Get set the user e-mail
     *
     * @param mail the user e-mail.
     */
    public void setMail(String mail) {
        this.mail = mail;
    }

    /**
     * Get the user password
     *
     * @return the user password.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Set the user password
     *
     * @param password the user password.
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * Get the user roles
     *
     * @return the user roles.
     */
    public List<RoleEntity> getRoles() {
        return roles;
    }

    /**
     * Set the user roles
     *
     * @param roles user roles.
     */
    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "UserEntity{" +
                "login='" + login + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", mail='" + mail + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                '}';
    }

    /**
     * Add role to the user
     *
     * @param role the role name
     */
    public void addRole(final RoleEntity role) {
        if (roles.contains(role)) {
            throw new RuntimeException("role is already exists");
        }
        roles.add(role);
    }

    /**
     * Remove role from the user
     *
     * @param role the role name
     */
    public void removeRole(final RoleEntity role) {
        if (roles.contains(role)) {
            throw new RuntimeException("role is already exists");
        }
        roles.remove(role);
    }
}
