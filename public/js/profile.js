console.log(document.location)

const editForm = document.querySelector('.editPost');
const postForm = document.querySelector('.postNew');
const list = document.querySelector('.postlist');
const label = document.querySelector('.label');
const buttons = document.querySelector('.buttons');
// need function for edit post form

const showEditForm = async (event) => {
  const formEdit = event.target.getAttribute('editDataId');
  const displayForm = document.querySelector(`form[editForm="${formEdit}"]`);
  editForm.style.display= "block";
  displayForm.style.display= "block";
  postForm.style.display="none";
  list.style.display="none";
  label.style.display="none";
  buttons.style.display="none";
console.log('clicked edit on')

}
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
    if (event.target.hasAttribute('editBtnId')) {
      event.preventDefault();
      console.log('clicked edit')
      
      const id = event.target.getAttribute('editBtnId');
      const name = event.target.querySelector(`#editPostName${id}`);
      const description = event.target.querySelector(`#editpostText${id}`);
  
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

    // click edit button to show edit form
    const editBtns = document.querySelectorAll('.editBtn');
    editBtns.forEach((btn) => {
      btn.addEventListener('click', showEditForm);
    });
    // document
    // .querySelector('.editBtn')
    // .addEventListener('click', showEditForm);
