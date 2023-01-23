const newFormHandler = async(event) =>{
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const postBody = document.querySelector('#post-body').value.trim();

    if(title && postBody){
        const response = await fetch ('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, postBody}),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.ok){
            document.location.replace('/profile')
        }
        else{
            alert('Post Creation Failed, Please Try Again')
        }
    }
  }

  const deleteButtonHandler = async (event) =>{
    if(event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id')

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE'
        });
        
    if(response.ok){
            document.location.replace('/profile');
        }
        else {
            alert('Post Could Not Be Deleted, Try Again')
        }
    }
  };

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
document.querySelector('.post-list').addEventListener('click', delButtonHandler);