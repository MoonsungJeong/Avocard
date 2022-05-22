export default class funcShowNotice {
    constructor(){
        this.openNotice();
    }
    openNotice(){
        fetch(`/api/notice`)
            .then(res => res.json())
            .then(list => {
                this.seeNotice(list);
            })
            .catch(error => {
                console.log("see notice failed - "+error);
            })
    }
    seeNotice(arr){
        const container = document.querySelector(".notice-container");
        let result="";
        for(let i=0; i<arr.length; i++){
            result+=`
            <div class="notice-item">
                <div class="notice-box">
                    <div class="notice-date"><div>${arr[i].noticeDate}</div></div>
                    <div class="notice-title"><div>${arr[i].noticeTitle}</div></div>
                </div>
                <div class="notice-description"><div>${arr[i].noticeContent}</div></div>
            </div>
            `;
        }
        container.innerHTML=result;
    }
}
