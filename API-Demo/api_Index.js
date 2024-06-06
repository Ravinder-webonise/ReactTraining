document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts-container");

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const posts = await response.json();
      displayPosts(posts);
    } catch (error) {
      console.error("Fetching posts failed:", error);
      postsContainer.innerHTML = `<p class="error">Failed to load posts. Please try again later.</p>`;
    }
  };

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      console.error(`Fetching comments for post ${postId} failed:`, error);
      return [];
    }
  };

  const displayPosts = async (posts) => {
    const alternatePosts = posts.filter((_, index) => index % 2 === 0);

    const postsHtml = alternatePosts
      .map(
        ({ id, title, body }) => `
            <div class = "post-Number">Post - ${id} </div>
            <div class="post" data-post-id = ${id}>
                <div class="post-header">
                    <h2>${title}</h2>
                    <button class="toggle-comments" data-post-id = ${id}>Show Comments</button>
                </div>
                <p>${body}</p>
                <div class="comments" id=comments-${id} style="display: none;"></div>
            </div>
        `
      )
      .join("");

    postsContainer.innerHTML = postsHtml;

    document.querySelectorAll(".toggle-comments").forEach((button) => {
      button.addEventListener("click", async (event) => {
        const postId = event.target.getAttribute("data-post-id");
        console.log(postId);
        const commentsContainer = document.getElementById(`comments-${postId}`);
        if (commentsContainer.style.display === "none") {
          const comments = await fetchComments(postId);
          const commentsHtml = comments
            .map(
              ({ name, body }) => `
                        <div class="comment">
                            <h4>${name}</h4>
                            <p>${body}</p>
                        </div>
                    `
            )
            .join("");
          commentsContainer.innerHTML = commentsHtml;
          commentsContainer.style.display = "block";
          event.target.textContent = "Hide Comments";
        } else {
          commentsContainer.style.display = "none";
          event.target.textContent = "Show Comments";
        }
      });
    });
  };

  fetchPosts();
});
