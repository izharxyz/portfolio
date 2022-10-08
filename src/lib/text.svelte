<script>
	import "../app.css";
</script>
<div class="sp-content">
    <div class="sp-globe"></div>
    <h2 class="frame-1 font-mono font-bold">HELLO</h2>
    <h2 class="frame-2 font-mono">I'm Mohamed Izhar</h2>
    <h2 class="frame-3 font-mono">a developer</h2>
    <h2 class="frame-4 font-mono">an enthusiast </h2>
    <h2 class="frame-5 font-mono font-extrabold">
        <span>AND,</span>
        <span>I LOVE</span>
        <span>TO CODE.</span>
    </h2>
</div>

<style>
    .sp-content {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        z-index: 1000;
    }
    h2 {
        position: absolute;
        top: 50%;
        line-height: 100px;
        height: 90px;
        margin-top: -50px;
        font-size: 90px;
        width: 100%;
        text-align: center;
        color: transparent;
        -webkit-animation: blurFadeInOut 3s ease-in backwards;
        -moz-animation: blurFadeInOut 3s ease-in backwards;
        -ms-animation: blurFadeInOut 3s ease-in backwards;
        animation: blurFadeInOut 3s ease-in backwards;
    }
    h2.frame-1 {
        font-size: 400px;
        -webkit-animation-delay: 0s;
        -moz-animation-delay: 0s;
        -ms-animation-delay: 0s;
        animation-delay: 0s;
    }
    h2.frame-2 {
        -webkit-animation-delay: 3s;
        -moz-animation-delay: 3s;
        -ms-animation-delay: 3s;
        animation-delay: 3s;
    }
    h2.frame-3 {
        -webkit-animation-delay: 6s;
        -moz-animation-delay: 6s;
        -ms-animation-delay: 6s;
        animation-delay: 6s;
    }
    h2.frame-4 {
        -webkit-animation-delay: 9s;
        -moz-animation-delay: 9s;
        -ms-animation-delay: 9s;
        animation-delay: 9s;
    }
    h2.frame-5 {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        animation: none;
        color: transparent;
        text-shadow: 0px 0px 1px #fff;
    }
    h2.frame-5 span {
        -webkit-animation: blurFadeIn 3s ease-in 12s backwards;
        -moz-animation: blurFadeIn 1s ease-in 12s backwards;
        -ms-animation: blurFadeIn 3s ease-in 12s backwards;
        animation: blurFadeIn 3s ease-in 12s backwards;
        color: transparent;
        text-shadow: 0px 0px 1px #fff;
    }
    h2.frame-5 span:nth-child(2) {
        -webkit-animation-delay: 13s;
        -moz-animation-delay: 13s;
        -ms-animation-delay: 13s;
        animation-delay: 13s;
    }
    h2.frame-5 span:nth-child(3) {
        -webkit-animation-delay: 14s;
        -moz-animation-delay: 14s;
        -ms-animation-delay: 14s;
        animation-delay: 14s;
    }
</style>