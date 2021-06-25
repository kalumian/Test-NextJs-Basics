import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Comment.module.css";
import { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setComments(data)
    };
    GetData()
  }, []);
  return (
    <div>
      <Head>
        <title>Mr.Kalumian | Comments</title>
        <meta name="keywords" content="kalumian" />
      </Head>
      <h1>The Comments</h1>
      <p>
         {comments[0] ? comments.map((item) => (
          <div key={item.id} className={styles.single}>
            <Link href={`/comments/${item.id}`}>
             <a>
                <h3>
                  {item.id} - Name : {item.name} || Email: {item.email}
                </h3>
                <p>{item.body}</p>
              </a>
            </Link>
          </div>
        )) : <>Loding ...</>}
      </p>
    </div>
  );
};

export default Comments;
