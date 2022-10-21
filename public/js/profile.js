console.log(document.location
  )
const newPost = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#newPost').value.trim();
    const description = document.querySelector('#postText').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Unable to post!');
      }
    }
  };
  // Todo: match attribute to profile handlebars so it works
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.post-btn')
    .addEventListener('click', newPost);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);