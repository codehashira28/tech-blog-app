const createbtn = document.querySelector('#create');


const createPost = async (event) => {
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    const response = await fetch('/dashboard/create', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to post');
    }
}

createbtn.addEventListener('click', createPost);