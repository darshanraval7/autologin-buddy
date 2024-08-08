
// [ When Page Will Reload - We Will Fetch Data From Chrome Storage ]
chrome.storage.sync.get(['email', 'password'], (items) => {
    
    // [ Variables ]
    const email = items.email || '';
    const password = items.password || '';
  
    // [ Validation ]
    const emailField = document.querySelector('input[type="email"], input[type="text"][name*="email"], input[type="text"][name*="user"], input[type="text"][placeholder*="email"], input[type="text"][placeholder*="user"]');
    const passwordField = document.querySelector('input[type="password"]');
  
    // [ Email Setup ]
    if (emailField) {
      emailField.value = email;
    }
    // [ Password Setup ]
    if (passwordField) {
      passwordField.value = password;
    }
  });
  