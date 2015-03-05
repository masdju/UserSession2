$(document).on('pagecreate','#signIn',function () {
			$('#getdata-button').on("click",function(){
				alert('Called!');
				//$.getJSON('http://mobile77.webatu.com/PhpBackend/UserSession/json-data.php', function(data) {
				$.getJSON('http://mobile77.webatu.com/PhpBackend/UserSession/json-data.php', function(data) {

					//alert(data); //uncomment this for debug

					//alert (data.item1+" "+data.item2+" "+data.item3); //further debug

					$('#showdata').html("<p>item1="+data.item1+" item2="+data.item2+" item3="+data.item3+"</p>");

				});
			});
            $('#btnGetAccount').on('click',function(){
				alert('btnGetAccount clicked');
				$.getJSON('http://mobile77.webatu.com/PhpBackend/UserSession/get_product_details.php?pid=2', function(data) {
					alert('Hasil: ' + data.product[0].name);
					$('#showAccount').html(data.product[0].name);
			  });
			});
			//$('#btnGetAccount').on('click',function(){
				//alert('btnGetAccount clicked');
				//$.getJSON('http://mobile77.webatu.com/PhpBackend/UserSession/get_product_details.php?pid=2', function(data) {
					//alert('Hasil: ' + data.success);
					//$('#showAccount').html(data.success);
				//});
			//});
			$('#btnSignIn').on('click', function () {
                alert('Called!');

                var credential = {
                    userName: $('#dfsUserName').val(),
                    password: $('#dfsPassword').val()
                };

                alert(credential.userName + ' ^ ' + credential.password);

                // Post credential
                $.post(
                   "http://mobile77.webatu.com/PhpBackend/UserSession/sign_in.php",
                   credential,
                   function (dataCredential, status) {
                       alert('success: ' + ' ^' + dataCredential.success + ' ^ ' + dataCredential.userName + ' ^ ' + dataCredential.password);
                       //alert('success ');
                       if (dataCredential.success == 1) {
                           alert('Go to Home ');
						   
                           // jQM 1.3.2 and below
                           //$.mobile.changePage("home.html");

                           // jQM 1.4
                           //$.mobile.pageContainer.pagecontainer("change", "#page_id" or "URL");
                           //$.mobile.pageContainer.pagecontainer("change", "home.html"); GA JALAN!!!

                           // JS not execute properly when using $.mobile.changePage("home.html")
						   window.location = 'home.html';
                       }
                       else {
                           alert('Login gagal!');
                       }
                   },
                   "json"
                );
            });
            $('#navtoHome').on('click', function () {
                window.location = 'home.html';
            });
        });