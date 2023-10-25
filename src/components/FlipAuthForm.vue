<template>


    <div class="bg-[#f6f5f7] md:flex justify-center items-center flex-col h-screen pt-20 md:pt-0 -mt-0 md:-mt-12">
        <div class="small-device-form-shadow">
            <div class="container bg-white rounded-t-[10px] rounded-b-none md:rounded-b-[10px] shadow-none md:shadow-lg relative overflow-hidden mx-auto md:mx-0 w-11/12 sm:w-9/12 md:w-[768px] max-w-full min-h-[420px] md:min-h-[480px]" id="container">
                <div class="form-container sign-up-container absolute top-0 left-0 w-full md:w-1/2 opacity-0 z-[1] h-full transition-all ease-in-out duration-300">
                    <form action="#" class="bg-white flex items-center justify-center flex-col px-10 sm:px-[50px] h-full text-center">
                        <h1 class="text-4xl font-bold m-0">Create Account</h1>
                        <span class="inline-block mb-5">or use your email for registration</span>
                        <input class="bg-[#eee] border border-1-white py-3 px-[15px] my-2 w-full focus:outline-none focus:border focus:border-red-400" type="text" placeholder="Name" />
                        <input class="bg-[#eee] border border-1-white py-3 px-[15px] my-2 w-full focus:outline-none focus:border focus:border-red-400" type="email" placeholder="Email" />
                        <input class="bg-[#eee] border border-1-white py-3 px-[15px] my-2 w-full focus:outline-none focus:border focus:border-red-400" type="password" placeholder="Password" />
                        <button class="rounded-[20px] border-[#FF4B2B] text-xs bg-[#FF4B2B] text-white font-bold uppercase py-3 px-[45px] transition ease-in duration-300 tracking-wide active:scale-95 focus:none mt-3">Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container absolute top-0 left-0 w-full md:w-1/2 z-20 h-full transition-all ease-in-out duration-300">
                    <form action="#" class="bg-white flex items-center justify-center flex-col px-10 sm:px-[50px] h-full text-center">
                        <h1 class="text-4xl font-bold m-0">Sign in</h1>
                        <span class="inline-block mb-5">or use your account</span>
                        <input class="bg-[#eee] border border-1-white py-3 px-[15px] my-2 w-full focus:outline-none focus:border focus:border-red-400" type="email" placeholder="Email" />
                        <input class="bg-[#eee] border border-1-white py-3 px-[15px] my-2 w-full focus:outline-none focus:border focus:border-red-400" type="password" placeholder="Password" />
                        <a href="#" class="text-[#333] text-sm my-[15px] no-underline">Forgot your password?</a>
                        <button class="rounded-[20px] border-[#FF4B2B] text-xs bg-[#FF4B2B] text-white font-bold uppercase py-3 px-[45px] transition ease-in duration-300 tracking-wide active:scale-95 focus:none">Sign In</button>
                    </form>
                </div>
                <div class="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform ease-in-out delay-300 z-30 hidden md:block">
                    <div class="overlay bg-[#FF416C] text-white relative left-[-100%] h-full w-[200%] translate-x-0 transition-transform ease-in-out delay-300  bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] bg-no-repeat bg-cover">
                        <div class="overlay-panel overlay-left absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2">
                            <h1 class="text-4xl font-bold m-0">Welcome Back!</h1>
                            <p class="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-6">To keep connected with us please login with your personal info</p>
                            <button @click="toggleSignIn" class="ghost rounded-[20px] border text-xs bg-transparent text-white font-bold uppercase py-3 px-[45px] transition ease-in duration-300 tracking-wide active:scale-95 focus:none" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2">
                            <h1 class="text-4xl font-bold m-0">Hello, Friend!</h1>
                            <p class="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-6">Enter your personal details and start journey with us</p>
                            <button @click="toggleSignUp" class="ghost rounded-[20px] border text-xs bg-transparent text-white font-bold uppercase py-3 px-[45px] transition ease-in duration-300 tracking-wide active:scale-95 focus:none" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- SMALL DEVICE TOGGLE FOR SIGN IN SIGN UP -->
            <div class="w-11/12 sm:w-9/12 mx-auto bg-white block md:hidden relative rounded-b-[10px]" id="bottom-toggle-container">
                <div class="bg-[#FF416C] bg-gradient-to-b from-[#FF4B2B] to-[#FF416C] bg-no-repeat bg-cover rounded-b-[10px] p-5 text-center small-device-toggle-panel text-white">
                    <div class="bottom-sign-in-panel absolute w-full bottom-4">
                        <h1 class="text-xl font-bold m-0">Welcome Back!</h1>
                        <p class="text-sm font-thin leading-4 tracking-[0.5px] mt-1 mb-3 px-10">To keep connected with us please login with your personal info</p>
                        <button @click="smallDeviceToggleSignIn" class="ghost rounded-[20px] border text-xs bg-transparent text-white font-bold uppercase py-2 px-[45px] transition ease-in duration-300 tracking-wide active:scale-95 focus:none">Sign In</button>
                    </div>
                    <div class="bottom-sign-up-panel">
                        <h1 class="text-xl font-bold m-0">Hello, Friend!</h1>
                        <p class="text-sm font-thin leading-4 tracking-[0.5px] mt-1 mb-3 px-10">Enter your personal details and start journey with us</p>
                        <button @click="smallDeviceToggleSignUp" class="ghost rounded-[20px] border text-xs bg-transparent text-white font-bold uppercase py-3 px-[45px] transition ease-in duration-300 tracking-wide active:scale-95 focus:none">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const toggleSignUp = () => {
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
}
const toggleSignIn = () => {
    const container = document.getElementById('container');
	container.classList.remove("right-panel-active");
}
const smallDeviceToggleSignUp = () => {
    const container = document.getElementById('container');
    const bottomContainer = document.getElementById('bottom-toggle-container');
    container.classList.add("top-panel-active");
    bottomContainer.classList.add("sign-in-panel-active");
}
const smallDeviceToggleSignIn = () => {
    const container = document.getElementById('container');
    const bottomContainer = document.getElementById('bottom-toggle-container');
	container.classList.remove("top-panel-active");
	bottomContainer.classList.remove("sign-in-panel-active");
}

</script>

<style scoped>
.form-container {
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	z-index: 2;
}


.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}
.overlay-container {
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}



/* CSS FOR SMALL DEVICE ONLY */
.small-device-toggle-panel{
    margin-top: -70px;
    position: relative;
    z-index: 99999;
    padding: 100px 0 20px 0;
    clip-path: polygon(50% 26%, 100% 50%, 100% 100%, 0 100%, 0 49%);
}
.bottom-sign-in-panel{
    transform: translateY(100%);
    opacity:0;
    z-index: 1;
    transition: transform 0.6s ease-in-out;
}
.bottom-sign-up-panel{
    transform: translateY(0);
    opacity: 1;
    z-index: 2;
    transition: transform 0.6s ease-in-out;
}
.sign-in-panel-active .bottom-sign-in-panel{
    transform: translateY(0);
    opacity: 1;
    z-index: 2;
    transition: transform 0.6s ease-in-out;
}
.sign-in-panel-active .bottom-sign-up-panel{
    transform: translateY(100%);
    opacity:0;
    z-index: 1;
    transition: transform 0.6s ease-in-out;
}

.container.top-panel-active .sign-in-container {
    transition: all 0.6s ease-in-out;
}

.container.top-panel-active .sign-up-container {
	opacity: 1;
	z-index: 5;
}
@media(max-width:767px){
    .small-device-form-shadow{
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        width: 91.67%;
        border-radius: 10px;
        margin: 0 auto;
    }
}

</style>