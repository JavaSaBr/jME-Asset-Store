package com.jme.asset.store.db.entity;

import javax.persistence.*;

/**
 * The base implementation of a db entity.
 *
 * @author Denis Lesheniuk
 */
@MappedSuperclass
public abstract class BaseEntity {

    /**
     * The uniq ID of this entity.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, precision = 15)
    protected long id;

    public BaseEntity() {
    }

    public BaseEntity(final long id) {
        this.id = id;
    }

    /**
     * Gets the uniq ID of this entity.
     *
     * @return the uniq ID of this entity.
     */
    public long getId() {
        return id;
    }

    /**
     * Sets the uniq ID of this entity.
     *
     * @param id the uniq ID of this entity.
     */
    public void setId(final long id) {
        this.id = id;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final BaseEntity that = (BaseEntity) o;
        return getId() == that.getId();
    }

    @Override
    public int hashCode() {
        return (int) (getId() ^ (getId() >>> 32));
    }

    @Override
    public String toString() {
        return "BaseEntity{" +
                "id=" + id +
                '}';
    }
}