import React from "react";
import { Link } from "react-router-dom";

function BlogPage(){
    return(
        <>
        <h1>BlogPage</h1>

        <ul>
            {blogdata.map(post => (
              <BlogLink />
        ))}
        </ul>
        </>
    );
}

 function BlogLink({ post }) {
    return(
        <li>            
            <Link to={'/blog/${post.slug}'}>{post.title}</Link>          
        </li>
    )
 }

 const blogdata = [];
 blogdata.push({
    title: '¿que es React?',
    slug: 'que-es-react',
    content: 'React es el mejor framework de JavaScript.',
    author: 'Lean Lopez'
 })
 blogdata.push({
    title: '¿que es Vue?',
    slug: 'que-es-vue',
    content: 'Vue es el mejor framework de JavaScript.',
    author: 'Lean Lopez'
 })
  blogdata.push({
    title: '¿que es Angular?',
    slug: 'que-es-angular',
    content: 'Angular es el mejor framework de JavaScript.',
    author: 'Lean Lopez'
 })

export { BlogPage };