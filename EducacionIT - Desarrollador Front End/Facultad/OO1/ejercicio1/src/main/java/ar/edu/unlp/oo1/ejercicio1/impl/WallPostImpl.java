package ar.edu.unlp.oo1.ejercicio1.impl;

import ar.edu.unlp.oo1.ejercicio1.WallPost;

public class WallPostImpl implements WallPost {
    private String text;
    private int likes;
    private boolean featured;

    public WallPostImpl() {
        this.text = "Undefined post";
        this.likes = 0;
        this.featured = false;
    }

    @Override
    public String getText() {
        return text;
    }

    @Override
    public void setText(String text) {
        this.text = text;
    }

    @Override
    public int getLikes() {
        return likes;
    }

    @Override
    public void like() {
        this.likes++;
    }

    @Override
    public void dislike() {
        if (this.likes > 0) {
            this.likes--;
        }
    }

    @Override
    public boolean isFeatured() {
        return featured;
    }

    @Override
    public void toggleFeatured() {
        this.featured = !this.featured;
    }

    @Override
    public String toString() {
        return "WallPost {" +
                "text: " + getText() +
                ", likes: '" + getLikes() + "'" +
                ", featured: '" + isFeatured() + "'" +
                "}";
    }
}