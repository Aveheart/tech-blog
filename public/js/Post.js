console.log(document.location)

const newComment = async (event) => {
    event.preventDefault();

    const content = document.querySelector('.commentInpt').value.trim();
    const pathname = document.location.pathname.split("/")
    const post_id = pathname[pathname.length-1]
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
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
    .addEventListener('click', newComment);
  
  