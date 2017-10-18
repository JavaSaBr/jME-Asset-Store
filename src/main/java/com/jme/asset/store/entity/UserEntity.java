package com.jme.asset.store.entity;

import com.jme.asset.store.entity.BaseEntity;
import org.apache.catalina.LifecycleState;

import javax.persistence.*;
import java.util.List;

/**
 * The User entity.
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
     * The User login.
     */
    @Column(name = "login", length = 50, nullable = false, unique = true)
    private String login;

    /**
     * The User first name.
     */
    @Column(name = "first_name", length = 50)
    private String firstName;

    /**
     * The User last name.
     */
    @Column(name = "last_name", length = 50)
    private String lastName;

    /**
     * The User middle name.
     */
    @Column(name = "middle_name", length = 50)
    private String middleName;

    /**
     * The User mail.
     */
    @Column(name = "mail", length = 50, unique = true)
    private String mail;

    /**
     * The User password.
     */
    @Column(name = "password", length = 50, nullable = false)
    private String password;

    /**
     * The User roles.
     */
    @ManyToMany(fetch = FetchType.EAGER)
    private List<RoleEntity> roles;

    public UserEntity(){
    }

    /**
     * @return the User login.
     */
    public String getLogin() {
        return login;
    }

    /**
     * @param login the User login.
     */
    public void setLogin(String login) {
        this.login = login;
    }

    /**
     * @return the User first name.
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName the User first name
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @return the User last name.
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the User last name.
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return the User middle name.
     */
    public String getMiddleName() {
        return middleName;
    }

    /**
     * @param middleName the User middle name.
     */
    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    /**
     * @return the User mail.
     */
    public String getMail() {
        return mail;
    }

    /**
     * @param mail the User mail.
     */
    public void setMail(String mail) {
        this.mail = mail;
    }

    /**
     * @return the User password.
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the User password.
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the User roles.
     */
    public List<RoleEntity> getRoles() {
        return roles;
    }

    /**
     * @param roles User roles.
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
}
