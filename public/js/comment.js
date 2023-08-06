const createbtn = document.querySelector('#create');

const id = Number(window.location.pathname[window.location.pathname.length-1]);

const createComment = async (event) => {
    const comment = document.querySelector('#comment').value;
    const response = await fetch(`/comment/${id}`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to post');
    }
}

createbtn.addEventListener('click', createComment);
