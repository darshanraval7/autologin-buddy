
// [ When User Will Click On Save - We Are Storing it in Chrome Storage ]
document.getElementById('save').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    chrome.storage.sync.set({ email, password }, () => {
      alert('Email and password saved!');
      // [ Close the Popup ]
      window.close();
    });
  });
  