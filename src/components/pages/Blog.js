import React from 'react';
import { Link } from 'react-router-dom';
import '../Blog.css';
import BlogPost from './BlogPost';

export default function Blog() {
    return (
        <>
            <div className='blog'>
                <h1 className='blog--title'>blog &#128173;</h1>

                <Link to="/">
                    <p className="blog--home--link">home</p>
                </Link>

                <p className='blog--info'>
                    thoughts and ideas. short and simple. tweets minus the echo chambers.
                </p>
                <p>____________</p>
                <h1 className="blog--posts">My Reading List</h1>
                <table className="reading--list">
                    <thead>
                        <tr>
                            <th>2018/2019</th>
                            <th>2020</th>
                            <th>2021</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Big Picture </td>
                            <td>Elephant in the brain</td>
                            <td>2001 space odyssey</td>
                        </tr>
                        <tr>
                            <td>And then there were none</td>
                            <td>Ethics in the Real World: 82 Brief Essays on Things That Matter</td>
                            <td>the snow leopard</td>
                        </tr>
                        <tr>
                            <td>Einsteins cosmos</td>
                            <td>A Mind for Numbers</td>
                            <td>Reading: Homo Deus</td>
                        </tr>
                        <tr>
                            <td>The Willpower Instinct</td>
                            <td>Flowers for Algernon</td>
                            <td>Reading: wind, sand, and stars</td>
                        </tr>
                        <tr>
                            <td>Hyper Focus</td>
                            <td>Recursion</td>
                        </tr>
                        <tr>
                            <td>Educated</td>
                            <td>The Better Angels of our Nature</td>
                        </tr>
                        <tr>
                            <td>Astrophysics for People in a Hurry</td>
                            <td>The  Creativity Code</td>
                        </tr>
                        <tr>
                            <td>When Breath Becomes Air</td>
                            <td>Being Mortal</td>
                        </tr>
                        <tr>
                            <td>grokking algorithms</td>
                            <td>21 Lessons for the 21st Century</td>
                        </tr>
                        <tr>
                            <td>Meditations Marcus Aurelius</td>
                            <td>The Moment of Lift</td>
                        </tr>
                        <tr>
                            <td>An Illustrated Book of Bad Arguments</td>
                            <td>Headspace guide to mindfulness</td>
                        </tr>
                        <tr>
                            <td>Come as your are</td>
                            <td>Brave new world</td>
                        </tr>
                        <tr>
                            <td>Hitchhikers Guide to the Galaxy</td>
                            <td>Man's Search for Meaning</td>
                        </tr>
                        <tr>
                            <td>Lying </td>
                            <td>Slaughter house five</td>
                        </tr>
                        <tr>
                            <td>Cant Hurt Me</td>
                            <td>The Selfish Gene</td>
                        </tr>
                        <tr>
                            <td>The prophet</td>
                            <td>The Precipice: Existential Risk and the Future of Humanity</td>
                        </tr>
                        <tr>
                            <td>The Greatest Show on Earth</td>
                            <td>In the Buddha's Words</td>
                        </tr>
                        <tr>
                            <td>Zero to One</td>
                            <td>The Murder of Roger Ackeroyd</td>
                        </tr>
                        <tr>
                            <td>The Four Horsemen: The Conversation</td>
                            <td>Making Sense</td>
                        </tr>
                        <tr>
                            <td>Extreme Ownership</td>
                            <td>Mythos: The Greek Myths Retold</td>
                        </tr>
                        <tr>
                            <td>Mindfulness: A Practical Guide to Awakening</td>
                        </tr>
                        <tr>
                            <td>Perfectly Reasonable Deviations from the Beaten Track</td>
                        </tr>
                        <tr>
                            <td>Why We Sleep</td>
                        </tr>
                        <tr>
                            <td>A Short History of Nearly Everything</td>
                        </tr>
                    </tbody>
                </table>
                <p>____________</p>
                <BlogPost
                    content="A cognitive turning point of mine occurred when I realized just how much of our lives are dictated by habits."
                />
            </div >
        </>


    );
}