

const sendForm = () => {

    const errorMessage = 'Что-то пошло  не так..',
          loadMessage = 'Загрузка.',
          successMessage = ' Спасибо! мы скоро с вами свяжемся!';
    const form = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');




// обработчик события для кнопки форм
for(let i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', (event) =>{
        event.preventDefault();
        
    form[i].appendChild(statusMessage);//добавление элемента
//  статут загрузки 
        statusMessage.textContent = loadMessage;
// запрос к серверу
        
        const formData = new FormData(form[i]);
       
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        // 
        postData(body)
            .then((response) => {
                  if(response.status !== 200) {
                                    throw new Error('status network not 200');
                  }
                      statusMessage.textContent = successMessage;
                   
                      setTimeout(() => {
                      statusMessage.textContent = '';
                     
                   },1000);
                  
                   setTimeout(() => {
                    
                    popup.style.display = 'none';
                 },3000);

                  
                                
                  input.forEach((elem) => {
                      elem.value = "";
                      });
             })
             .catch((error) => {
                statusMessage.textContent = errorMessage;
                 
              });

         }

     );
  }
  document.addEventListener('input', (event) => {
    let target = event.target;
    if(target.matches('.form-email') || target.matches('.top-form form-email')){
        target.value = target.value.replace(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{3,4})$/gi, '');
    }
});


// проверяем строки Input на правильный ввод текста
    document.addEventListener('input', (event) => {
        let target = event.target;
        if(target.matches('.form-name') || target.matches('.mess') || target.matches('.top-form-name')){
            target.value = target.value.replace(/[^А-Яа-яЁе \,\.\!\? ]/gi, '');
        }
    });
// проверяем строки Input на правильный ввод числа
  let number =3;
    document.addEventListener('input', (event) => {
        
        let target = event.target;
        if(target.matches('.form-phone')){
            if (target.value.length > 15 && target.value.length != '' ){
              alert('введите правильный номер') ;
            }   
        }  target.value = target.value.replace(/[^+0-9]{3,12}$/);
      
       
       
         })
         
         
    };
   

    const statusMessage = document.createElement('div'); 
    statusMessage.style.cssText = 'color: green';
    
    const postData = (body) => {
            return fetch('./server.php', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            
        
    
    };
export default sendForm;