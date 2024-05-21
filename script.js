const postButtonHandler = async (event) => {
  event.preventDefault();
  document.getElementById('postForm').value = '';

  document.getElementById('alert').classList.add('alert-in');
};

const alertButtonHandler = async (event) => {
  event.preventDefault();
  document.getElementById('alert').classList.remove('alert-in');
}

document.getElementById('postButton').addEventListener('click', postButtonHandler);

document.getElementById('alertButton').addEventListener('click', alertButtonHandler);
