package com.jme.asset.store.db.entity.user;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

/**
 * The admin user.
 *
 * @author Alex Brui
 */
@Entity
@DiscriminatorValue(value = "2")
public class AdminUserEntity extends UserEntity {
}
