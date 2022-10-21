console.log(document.location)
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

  // delete post
  const deletePost = async (event) => {
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

  // update a post
  const updatePost = async (event) => {
    if (event.target.hasAttribute('editDataId')) {
      const id = event.target.getAttribute('editDataId');
      const name = event.target.getAttribute(`#editPostName${id}`).value.trim();
      const description = event.target.getAttribute(`#editDataDesc${id}`).value.trim();
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Unable to update post');
      }
    }
  };
  
  // button posts new post
  document
    .querySelector('.post-btn')
    .addEventListener('click', newPost);

// delete button deletes the post
  document
    .querySelector('.btn')
    .addEventListener('click', deletePost);

    // when post is edited, edit button will fire off updatePost
    document
    .querySelector('.postEditbtn')
    .addEventListener('click', updatePost);

  // todo: event handler to display edit form when edit button is clicked