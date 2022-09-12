import Axios from 'axios';

let switchs = document.querySelectorAll('[data-switch-active-tag]');

if (switchs) {
    switchs.forEach((element) => {
        element.addEventListener('change', () => {
            let tagId = element.value;
            Axios.get(`/admin/categorie/switch/${tagId}`);
        })
    })
}