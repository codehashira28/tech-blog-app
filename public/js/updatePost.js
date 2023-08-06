const updatebtn = document.querySelector('#update');
const deletebtn = document.querySelector('#delete');

const id = Number(window.location.pathname[window.location.pathname.length-1]);

const updatePost = async (event) => {
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    const response = await fetch(`/dashboard/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post');
    }
}

const deletePost = async (event) => {
    const response = await fetch(`/dashboard/post/${id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post');
    }
}

updatebtn.addEventListener('click', updatePost);
deletebtn.addEventListener('click', deletePost);