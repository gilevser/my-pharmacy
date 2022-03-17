// console.log('editor!!!');
const editForm = document.querySelector('.myForm');

editForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = e.target.editName.value;
  const email = e.target.editEmail.value;
  const password = e.target.editPassword.value;
  const img = e.target.editImg.value;
  const bodyObj = {
    name, email, password, img,
  };
  console.log('editor!!!', e.target.id);

  if (name && email && password) {
    const response = await fetch(`/lkEdit/${e.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    });
  }
});
