

// function knowAboutme() {
//     window.location.href = "MyPortfilo.html";
// }


// ________________________ScrollIntoView__________________________

document.getElementById('Project').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.proj_section').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('Internships').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.Internship_container').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
// ____About____


document.getElementById('introduction-tap').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.about_container').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ___________Education______________

document.getElementById('Eduction-tap').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.Education_container').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ___________________Skills__________________

document.getElementById('Skills-tap').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.skills').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ____________________Certificate_________________

document.getElementById('Certificates-tab').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.Certificates').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
//    ----------------------up------------------

document.getElementById('Project1').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.proj_section').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('Internships1').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.Internship_container').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
// ____About____


document.getElementById('introduction-tap1').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.about_container').scrollIntoView({ behavior: 'smooth', block: 'start' });
});


// ___________Education______________

document.getElementById('Eduction-tap1').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.Education_container').scrollIntoView({ behavior: 'smooth', block: 'start' });
});


// ___________________Skills__________________

document.getElementById('Skills-tap1').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.skills').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ____________________Certificate_________________

document.getElementById('Certificates-tab1').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.Certificates').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('contactus').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById('formContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ________________________PROjects______________________________

document.getElementById('projects_click').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById('projection_open').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

                   // ^^^


// footer about section scroll
document.getElementById('Footer_about').addEventListener('click', function(ei) {
    ei.preventDefault(); // Prevent default anchor behavior
    
    // Use querySelector to select the first element with the 'skills' class and scroll smoothly
    document.querySelector('.about_container').scrollIntoView({ behavior: 'smooth', block: 'start' });
});


    
    // __________________________Eduction___________________________________________________________________

    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.class button');
        const details = document.querySelectorAll('.Eduction_details > div');
    
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove 'active' class from all details
                details.forEach(detail => detail.classList.remove('active'));
    
                // Add 'active' class to the corresponding detail
                const targetClass = button.classList[0] + '_details';
                const targetDetail = document.querySelector(`.${targetClass}`);
                if (targetDetail) {
                    targetDetail.classList.add('active');
                }
            });
        });
    });
    // _________________________Tools_Github_________________

    
    document.getElementById("Github").addEventListener("click", function() {
        window.location.href ="https://github.com/rohit-raj7";  // Redirect to the specified URL
    });
    


    // ___________________________certfication

    document.getElementById("pw").addEventListener("click", function() {
        window.location.href = "https://pwskills.com/learn/certificate/0ccd5dac-79ec-40ef-9f7c-0b92f71976a5/";
      });
      

      document.getElementById("Selceforce").addEventListener("click", function() {
        window.location.href = "https://smartinternz.com/internships/salesforce_certificates/9084c6f938aedee18e63af5c2167ecab";
      });

      
      document.getElementById("Linked").addEventListener("click", function() {
        window.location.href = "https://www.linkedin.com/learning/certificates/11d141cd8da7828ef4a3b66d19c2b8b95d4f5026a55529ab2830a995991632d2?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bzic%2FK%2F%2F5RYCLmoxOYXprJg%3D%3D";
      });
      
      document.getElementById("cisco").addEventListener("click", function() {
        window.location.href ="https://drive.google.com/file/d/163sipqfZJRw7ji-12igCcun_ME-888Iv/view?usp=sharing";  // Redirect to the specified URL
    });
    

    // ________________________________Project____________________________________________

    document.getElementById("projec_Name").addEventListener("click", function() {
     window.location.href = "https://weathe-app-rohit.netlify.app/";
      });
      



  //  ______________--------------vew Resumr_______________

  document.querySelector(".hello").addEventListener("click", function() {
    // Redirect to the resume link
     window.location.href = "https://drive.google.com/file/d/1K8Boag9BtsQl39Tn_s8sADhjD7ujIckv/view?usp=sharing";
  });


  

  
  function showSidebar() {
    const sidebar = document.querySelector('.siderbar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.siderbar');
    sidebar.style.display = 'none';
}

document.getElementsByClassName("button")[0].addEventListener("click", function(){
        window.location.href = "mailto:rohit.raj.career@gmail.com";
    });
 
   
// Function for the "Projects" button
function knowAboutme() {
    window.location.href = "My_Project/index.html";  // Redirect to the projects page
}

