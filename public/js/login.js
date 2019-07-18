// $(document).ready(function () {
//     console.log('LOGIN');

//     $("#loginbtn").on("click", function (event) {
//         event.preventDefault();
//         var loginUser = {
//             email: $("#email").val().trim(),
//             password: $("#password").val().trim()
//         }
//         console.log("Login User info: loginUser");
//         $.ajax('/users/signup', {
//             type: 'POST',
//             data: loginUser
//         }).then(function () {
//             console.log('User login');
//             location.href = '/';
//         });

//     });
// });