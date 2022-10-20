// const userComment = document.querySelector('.addComment');

const newComment = async (event) => {
    event.preventDefault();
  
    const commentContent = document.querySelector('.commentInpt').value.trim();
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Unable to post comment');
      }
    }
  };
  
  document
    .querySelector('.comment-btn')
    .addEventListener('submit', newComment);
  
  