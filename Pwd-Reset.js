function redirectToResetPage(method) {
    // Define the URL of the reset page based on the method
    var resetPageUrl = '';

    if (method === 'email') {
        resetPageUrl = 'reset_password_email.html'; // Change this to the actual email reset page URL
    } else if (method === 'phone') {
        resetPageUrl = 'reset_password_phone.html'; // Change this to the actual phone reset page URL
    }

    // Redirect to the reset page
    window.location.href = resetPageUrl;
    }
    function popup() {
        alert("His");
      }
    function openPopup() {
        // Create a popup container
        var popup = document.createElement('div');
        popup.className = 'popup';

        // Create a header indicating the purpose of the buttons
        var header = document.createElement('h2');
        header.textContent = 'Reset password via:';

        // Create button links
        var viaEmail =  document.createElement('button');
        viaEmail.textContent = 'Via Email';
        viaEmail.onclick = function() {
            // Action for Button 1
            // alert('Button 1 clicked!');
        };
        var viaPhone = document.createElement('button');
        viaPhone.textContent = 'Via Phone';
        viaPhone.onclick = function() {
            // Action for Button 2
            // alert('Button 2 clicked!');
        };

        var cancel = document.createElement('button');
        cancel.textContent = 'Cancel';
        cancel.onclick = function() {
            document.body.removeChild(popup);
        };

        // Append header and buttons to the popup container
        popup.appendChild(header);
        popup.appendChild(viaEmail);
        popup.appendChild(viaPhone);
        popup.appendChild(cancel);

        // Append popup container to the body
        document.body.appendChild(popup);
    }
    // document.getElementById('openPopup').addEventListener('click', openPopup);