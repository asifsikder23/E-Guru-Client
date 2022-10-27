import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="container mx-auto flex flex-wrap py-6">


<section class="w-full md:w-2/3 flex flex-col items-center px-3">

    <article class="flex flex-col shadow my-4">
        
        <a href="#" class="hover:opacity-75">
            <img src="https://getkt.com/wp-content/uploads/2019/02/Cross-Origin-Resource-Sharing.jpg"/>
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
            <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">CORS?</a>
            <p href="#" class="text-sm pb-8">
                By <a href="#" class="font-semibold hover:text-gray-800">Md. Asif Ullah Sikder</a>, Published on October 27th, 2020
            </p>
            <h1 class="text-2xl font-bold pb-3">What is CORS?</h1>
            <p class="pb-3">Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
            <p class="pb-3">The role of a CORS policy is to maintain the integrity of a website and secure it from unauthorized access.

            The CORS protocol was defined to relax the default security policy called the Same-Origin Policy (SOP) used by the browsers to protect their resources.

            The Same-Origin Policy permits the browser to load resources only from a server hosted in the same-origin as the browser.

            The SOP was defined in the early years of the web and turned out to be too restrictive for the new age applications where we often need to fetch different kinds of resources from multiple origins.

            The CORS protocol is implemented by all modern browsers to allow controlled access to resources located outside of the browser’s origin.</p>
        </div>
    </article>
    <article class="flex flex-col shadow my-4">
        
        <a href="#" class="hover:opacity-75">
            <img src="https://miro.medium.com/max/1000/1*JbDo7U0l62vYMfm1WxnA1g.png"/>
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
            <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Firebase</a>
            <p href="#" class="text-sm pb-8">
                By <a href="#" class="font-semibold hover:text-gray-800">Md. Asif Ullah Sikder</a>, Published on October 26th, 2020
            </p>
            <h1 class="text-2xl font-bold pb-3">Introduction</h1>
            <p class="pb-3">Firebase is a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server.</p>

            <h1 class="text-2xl font-bold pb-3">Why are you using firebase?</h1>
            <p class="pb-3">The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
            <h1 class="text-2xl font-bold pb-3">What other options do you have to implement authentication?</h1>
            <p class="pb-3">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Options are Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
        </div>
    </article>
    <article class="flex flex-col shadow my-4">
        
        <a href="#" class="hover:opacity-75">
            <img src="https://i.ytimg.com/vi/99RWZsEITx4/maxresdefault.jpg"/>
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
            <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Private Route</a>
            <p href="#" class="text-sm pb-8">
                By <a href="#" class="font-semibold hover:text-gray-800">Md. Asif Ullah Sikder</a>, Published on October 24th, 2020
            </p>
            <h1 class="text-2xl font-bold pb-3">How does Private Route Work?</h1>
            <p class="pb-3">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
        </div>
    </article>
    <article class="flex flex-col shadow my-4">
        
        <a href="#" class="hover:opacity-75">
            <img src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/nodejs-reference-architecture_2x.png?itok=IADzXWmx"/>
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
            <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Node</a>
            <p href="#" class="text-sm pb-8">
                By <a href="#" class="font-semibold hover:text-gray-800">Md. Asif Ullah Sikder</a>, Published on October 20th, 2020
            </p>
            <h1 class="text-2xl font-bold pb-3">What is Node?</h1>
            <p class="pb-3">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>

            <h1 class="text-2xl font-bold pb-3">How does node work?</h1>
            <p class="pb-3"> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

            Node.js basically works on two concept

            Asynchronous
            Non-blocking I/O</p>
        </div>
    </article>



    <div class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
        <div class="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
            <img src="https://scontent.fdac145-1.fna.fbcdn.net/v/t39.30808-6/274233181_3085646058375783_6690705659848583132_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHYmM8By5Myxtb_oY0ILgelRCR17VNXxDBEJHXtU1fEMKDbGp-fVNIrgPRzX4dJhQw7i8rXwM919KgUH0m-9vlS&_nc_ohc=QolRrm1g3DYAX_pWeqX&_nc_ht=scontent.fdac145-1.fna&oh=00_AfArrUEdIx_n8paQcHC_cJliCDAT48-HQrTyg-IYeS41_Q&oe=635F1FED" class="rounded-full shadow h-32 w-32"/>
        </div>
        <div class="flex-1 flex flex-col justify-center md:justify-start">
            <p class="font-semibold text-2xl">Md. Asif Ullah Sikder</p>
            <p class="pt-2">Honest and have a very good manner. I spend my time to work on development because it's my passion I like fruit, ice-cream and my most favorite biryiaani and like to play Chess.</p>
            <div class="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
                <a class="" href="https://www.facebook.com/asifullahsikder">
                    <i class="fab fa-facebook"></i>
                </a>
                <a class="pl-4" href="https://www.instagram.com/asifullahsikder/">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="pl-4" href="https://twitter.com/asifsikder23">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="pl-4" href="https://www.linkedin.com/in/md-asif-ullah-sikder-a6993b178/">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </div>

</section>

<div class="w-full md:w-1/3 flex flex-col items-center px-3">

    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">About Us</p>
        <p class="pb-2">The way we work has been irreversibly disrupted. Covid-19 has unmasked a desire for people to work on their own terms. At their own pace. In their own environment. As hybrid workplaces increasingly become the norm, hybrid learning is reinventing the way we approach professional and on-the-job training & education. Let our guide be your guide to adopting hybrid learning into your training programs.</p>
        <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
            Get to know us
        </a>
    </div>

    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Instagram</p>
        <div class="grid grid-cols-3 gap-3">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9"/>
        </div>
        <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
            <i class="fab fa-instagram mr-2"></i> Follow @e-guru
        </a>
    </div>

</div>

</div>
        </div>
    );
};

export default Blog;