import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/Comment.module.css";

const Comment = () => {
  const Route = useRouter();
  const Id = Route.query.id;
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
      const data = await res.json();
      setComment(data);
    };
    GetData();
  }, []);

  return (
    <div>
      <p>
        {comment[0] ? (
          comment.filter(item => item.id === Number(Id)).map((item) => (
            <div key={item.id} className={styles.single}>
                <a>
                  <h3>
                    {item.id} - Name : {item.name} || Email: {item.email}
                  </h3>
                  <p>{item.body}</p>
                </a>
            </div>
          ))
        ) : (
          <>Loding ...</>
        )}
      </p>
      <div
        style={{
          textAlign: "center",
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
        onClick={() => Route.back()}
      >
        العودة للخلف
      </div>
    </div>
  );
};

export default Comment;
