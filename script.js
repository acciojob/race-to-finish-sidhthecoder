
let promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise1");
	},(Math.floor(Math.random()*(5)) + 1)*1000;
});
let promise2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise2");
	},(Math.floor(Math.random()*(5)) + 1)*1000;
});
let promise3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise3");
	},(Math.floor(Math.random()*(5)) + 1)*1000;
});
let promise4=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise4");
	},(Math.floor(Math.random()*(5)) + 1)*1000;
});
let promise5=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise5");
	},(Math.floor(Math.random()*(5)) + 1)*1000;
});
window.promises = [promise1,promise2,promise3,promise4,promise5];

let ans=Promise.Any(window.promises)
	.then((res) => {
    console.log("ANY", res);
  }).catch((e) => console.log(e));

let body=document.getElementById("output");
body.innerHTML=ans;



// Do not change the code above this
// add your promises to the array `promises`
