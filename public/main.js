var favorites = document.getElementsByClassName(".fa-star");
const buttons = document.getElementsByClassName('.delete')

Array.from(buttons).forEach(function(button) {
  button.addEventListener('click', function(){
    const shortId = this.parentNode.parentNode.childNodes[3].childNodes[0].href
    deleteRow(shortId)
  });
});

function deleteRow(shortId) {
  fetch('links', {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'shortId': shortId,
    })
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      console.log('error: %d', Response.status)
    }
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
  .catch(error => {
    console.error('Error deleting link:', error)
  })
}

Array.from(favorites).forEach(function(favorite) {
  favorite.addEventListener('click', function(){
    const shortId = this.parentNode.parentNode.childNodes[3].childNodes[0].href
    updateFavorite(shortId, false)
  });
});

function updateFavorite(shortId, favorite) {
  fetch('links', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'shortId': shortId,
      'favorite': favorite
    })
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      console.log('error: %d', Response.status)
    }
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
  .catch(error => {
    console.error('Error deleting link:', error)
  })
}

// Array.from(buttons).forEach(function(button) {
//   button.addEventListener('click', function(){
//     const fullUrl = this.parentNode.parentNode.childNodes[1].childNodes[0].href
//     const shortId = this.parentNode.parentNode.childNodes[3].childNodes[0].textContent
//     // const favorite = this.parentNode.parentNode.childNodes[1]
//     fetch('links', {
//       method: 'DELETE',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'fullUrl': full,
//         'shortId': shortId,
//         // 'favorite':favorite
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });


// Array.from(buttons).forEach(function (button) {
//   button.addEventListener('click', function () {
//     function deleteLink(shortId) {
//       if (confirm('Are you sure you want to delete this link?')) {
//         fetch('/links', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'full': full,
//             'shortId': shortId,
//             'favorite': favorite
//           })
//         }).then(response => {
//           if (response.ok) {
//             location.reload();
//           } else {
//             alert('Failed to delete link');
//           }
//         }).catch(error => {
//           console.error('Error deleting link:', error);
//           alert('Failed to delete link');
//         });
//       }
//     }
//   });
// })

// Array.from(favorite).forEach(function(element) {
//   element.addEventListener('click', function(){
//     // const name = this.parentNode.parentNode.childNodes[1].innerText
//     // const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const favorite = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('/links', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'favorite':favorite
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });


