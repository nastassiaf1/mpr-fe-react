import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import postService from "@/services/posts";
import { Post } from "@/interfaces/post";
import styles from "@/styles/pages/blog.module.scss"

export default function Blog() {
    const [posts, setPosts] = useState<Post[] | null>(null);

    useEffect(() => {
        const getPosts = async () => {
            const _posts = await postService.getPosts();
            setPosts(_posts);
        }

        getPosts();
    }, []);

    return (
        <>
            <div>
                <h2>Our blog</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Amet cras scelerisque pretium consectetur vitae.
                    Laoreet cursus et arcu ornare. Aliquet posuere lobortis at.
                </p>
                <button mat-raised-button>Subscribe</button>
            </div>

            <div className={ styles["posts-wrapper"] }>
                { posts ?
                    posts.map(post => (
                        <section key={post.id} className={ styles.posts }>
                            <div className={ styles["post__img-wrapper"] }>
                                <img className={ styles.post__img } loading="lazy" src={ post.src || '/images/default-post-img.png' } alt="Post Image" />
                            </div>
                            <h2 className={ styles.post__header }>{ post.header }</h2>
                            <p className={ styles.post__description }>{ post.description }</p>
                            <Button variant="contained" color="primary">Read post</Button>
                        </section>
                    ))
                    :   <div>
                        Posts not found
                    </div>
                }
            </div>
        </>
    )
}
