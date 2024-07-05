import renderHTML from "react-render-html";
import { useContext } from "react";
import moment from "moment";
import { Avatar } from "@chakra-ui/react";
import PostImage from "../images/PostImage";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
const PostList = ({ posts, handleDelete }) => {
  const [state] = useContext(UserContext);
  const router = useRouter();
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-5">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Avatar
                  className="mb-2"
                  style={{ background: "black", color: "white" }}
                  name={post.postedBy.name}
                  src="https://bit.ly/broken-link"
                />
                <div className="ml-3">
                  <span style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                    {post.postedBy.name}
                  </span>
                </div>
              </div>
              <div className="text-muted">
                {moment(post.createdAt).fromNow()}
              </div>
            </div>
            <div className="card-body">{renderHTML(post.content)}</div>
            <div className="card-footer">
              {post.image && <PostImage url={post.image.url} />}
              <div className="d-flex align-items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                  alt="Like"
                />
                <div style={{ marginRight: "30px" }}>likes</div>

                <img
                  src="https://cdn-icons-png.freepik.com/256/134/134718.png?semt=ais_hybrid"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                  alt="Comment"
                />

                <div style={{ marginRight: "20px" }}>comments</div>
                {state &&
                  state.user &&
                  state.user._id === post.postedBy._id && (
                    <>
                      <img
                        onClick={() => router.push(`/user/post/${post._id}`)}
                        src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                        alt="Edit"
                        style={{
                          width: 20,
                          height: 20,
                          marginLeft: "auto",
                          marginRight: "30px",
                          cursor: "pointer",
                        }}
                      />
                      <img
                        onClick={() => handleDelete(post)}
                        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                        alt="Delete"
                        style={{
                          width: 20,
                          height: 20,
                          marginRight: "30px",
                          cursor: "pointer",
                        }}
                      />
                    </>
                  )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;
